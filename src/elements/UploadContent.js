import React, {useState} from 'react';
import Button from './Button';
import ChartSection from './ChartSection';
import {useNavigate} from "react-router-dom";


function UploadContent() {
    const [file, setFile] = useState(null);
    const [dataList, setDataList] = useState([]);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', file);
        sessionStorage.removeItem("chart_info");
        sessionStorage.setItem("upload", "TRUE");
        fetch('http://localhost:8088/channel/worth/uploadFile', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                setDataList(result);
                sessionStorage.setItem("chart_info", JSON.stringify(result));

                navigate("/calculate/output");
            })
            .catch(error => console.error('Error uploading file:', error));
    };

    return (
        <div>
            <div>
                <input type="file" onChange={handleFileChange}/>
                <Button onClick={handleUpload} label="Upload File"/>
                {dataList.map((data, index) => (
                    <ChartSection key={index} data={data}/>
                ))}
            </div>
        </div>
    );
}

export default UploadContent;
