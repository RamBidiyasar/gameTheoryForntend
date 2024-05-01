import React, { useState } from 'react';
import ChartSection from '../elements/ChartSection';
import FilterSection from '../elements/FilterSection';
import UploadContent from "../elements/UploadContent";
import { useNavigate } from "react-router-dom";

function MainContent() {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const handleCalculate = (champagneId, channels) => {
        if (channels.length >= 2) {
            sessionStorage.setItem("champagneId", champagneId);
            sessionStorage.setItem("channels", channels);
            sessionStorage.setItem("upload", "FALSE");
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
        </div>
    );
}

export default MainContent;
