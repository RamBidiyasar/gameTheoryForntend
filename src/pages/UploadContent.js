import React, {useState} from 'react';
import Button from '../elements/Button';
import {useNavigate} from "react-router-dom";


function UploadContent() {
    const [file, setFile] = useState(null);
    const [dataList, setDataList] = useState([]);
    const navigate = useNavigate();
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        setIsUploading(true);
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
        <div className="upload-container">
            {isUploading ? (
                <div className="uploading">
                    <h1>Calculating value of every channel</h1>
                    {/* Add loading animation or indicator here */}
                </div>
            ) : (
                <div className="file-upload">
                    <h1>Upload a File</h1>
                    <div className="file-input">
                        <input type="file" id="file-input" onChange={handleFileChange}/>
                        <label htmlFor="file-input" className="file-label">Choose File</label>
                    </div>
                    <br/>
                    <br/>
                    {file && <span className="file-name">{file.name}</span>}
                    <br/>
                    {file && <Button onClick={handleUpload} label="Calculate" className="button-gap"/>}
                </div>

            )}
        </div>
    );


}

export default UploadContent;
