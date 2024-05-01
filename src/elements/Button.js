import React from 'react';
import './Button.css'; // Import CSS file for styling

function Button({ onClick, label }) {
    return (
        <button className="button" onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;
