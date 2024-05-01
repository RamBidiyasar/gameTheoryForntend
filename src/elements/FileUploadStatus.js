import React from 'react';

function FileUploadStatus({ uploading, uploadError }) {
    if (uploading) {
        return <p>Uploading...</p>;
    } else if (uploadError) {
        return <p>Error uploading file: {uploadError}</p>;
    } else {
        return null;
    }
}

export default FileUploadStatus;
