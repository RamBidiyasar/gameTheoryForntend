import React, {useState} from 'react';
import Button from './Button';
import ChartSection from './ChartSection';
import ProblemSolution from "./ProblemSolution"; // Import the ChartSection component
import { useNavigate } from "react-router-dom";


function App() {
    const [file, setFile] = useState(null);
    const [dataList, setDataList] = useState([]);
    const navigate = useNavigate();

    const togglePage = () => {
        navigate("/calculate");
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

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
                    <input type="file" onChange={handleFileChange}/>
                    <Button onClick={handleUpload} label="Upload File"/>
                    {dataList.map((data, index) => (
                        <ChartSection key={index} data={data}/>
                    ))}
                    <Button onClick={togglePage} label="Go to Main Content"/>
                </div>
        </div>
    );
}

export default App;
