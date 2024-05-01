import React, { useState } from 'react';
import ChartSection from './ChartSection';
import FilterSection from './FilterSection';

function MainContent() {
    const [data, setData] = useState(null);

    const fetchData = async (champagneId, channels) => {
        try {
            // const input = document.getElementById("test");
            // const data = new FormData();
            // data.append('file', input.files[0])
            // debugger;
            // return;
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
            fetchData(champagneId, channels);
        } else {
            setData(null);
            alert('Please select at least two channels.');
        }
    };
console.log(data, 'called')
    return (
        <div className={"content-container"}>
            <FilterSection handleCalculate={handleCalculate} />
            <ChartSection data={data} />
            {/*<input type="file" name={"test"} id={"test"}/>*/}
        </div>
    );
}

export default MainContent;
