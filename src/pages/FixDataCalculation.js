import React, {useState} from 'react';
import FilterSection from '../elements/FilterSection';
import {useNavigate} from "react-router-dom";

function FixDataCalculation() {
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
        <FilterSection handleCalculate={handleCalculate}/>
    )
}

export default FixDataCalculation;
