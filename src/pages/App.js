import React, {useState} from 'react';
import Button from '../elements/Button';
import ChartSection from '../elements/ChartSection';
import ProblemSolution from "../elements/ProblemSolution"; // Import the ChartSection component
import { useNavigate } from "react-router-dom";


function App() {
    const [file, setFile] = useState(null);
    const [dataList, setDataList] = useState([]);
    const navigate = useNavigate();

    const goToFixDataPage = () => {
        navigate("/calculate/dummy");
    };

    const uploadFile = ()=>{
        navigate("/calculate/upload")
    }


    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', file);

        fetch('http://localhost:8088/channel/worth/uploadFile', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                setDataList(result);
            })
            .catch(error => console.error('Error uploading file:', error));
    };

    return (
        <div className="outer-container">
            <div className="inner-container">
                <ProblemSolution />
                <h3>Find worth of channels by:</h3>
                <div className="button-container">
                    <Button onClick={goToFixDataPage} label="Existing data" />
                    <Button onClick={uploadFile} label="Uploading file" />
                </div>
            </div>
        </div>
    );

}

export default App;
