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

    const uploadFiile = ()=>{
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
        <div>
                <div>
                   <ProblemSolution/>
                    <Button onClick={goToFixDataPage} label="Go to Main Content"/>
                    <Button onClick={uploadFiile} label="Upload file"/>
                </div>
        </div>
    );
}

export default App;
