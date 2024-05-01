import React, { useState } from 'react';

function FileUploader({ file, onUpload, onUploadStart, onUploadComplete, onUploadError }) {
    const handleUpload = () => {
        onUploadStart();
        const formData = new FormData();
        formData.append('file', file);

        fetch('http://localhost:8088/channel/worth/uploadFile', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                onUploadComplete(result);
            })
            .catch(error => {
                onUploadError(error);
            });
    };

    return (
        <div>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default FileUploader;
