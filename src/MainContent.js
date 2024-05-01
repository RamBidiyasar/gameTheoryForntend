import React, { useState } from 'react';
import ChartSection from './ChartSection';
import FilterSection from './FilterSection';
import UploadContent from "./UploadContent";
import { useNavigate } from "react-router-dom";

function MainContent() {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const fetchData = async (champagneId, channels) => {
        try {
            const response = await fetch('http://localhost:8088/channel/worth/calculate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    champagneId,
                    channels
                })
            });

            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleCalculate = (champagneId, channels) => {
        if (channels.length >= 2) {
            sessionStorage.setItem("champagneId", champagneId);
            sessionStorage.setItem("channels", channels);
            // fetchData(champagneId, channels);
            navigate("/calculate/output");

        } else {
            setData(null);
            alert('Please select at least two channels.');
        }
    };

    return (
        <div className={"content-container"}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <FilterSection handleCalculate={handleCalculate} />
                <UploadContent />
            </div>
            <ChartSection data={data} />
            {/*<input type="file" name={"test"} id={"test"}/>*/}
        </div>
    );
}

export default MainContent;
