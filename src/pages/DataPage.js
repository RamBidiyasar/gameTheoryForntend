import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../elements/Button';

function DataPage() {
    const history = useHistory();

    const goToMainContent = () => {
        history.push('/main-content');
    };

    return (
        <div>
            <h1>Problem Statement:</h1>
            <p>Some text</p>
            <h1>Solve:</h1>
            <p>Some text</p>
            <h1>Business Objective:</h1>
            <p>Some text</p>
            <Button onClick={goToMainContent} label="Go to Main Content" />
        </div>
    );
}

export default DataPage;
