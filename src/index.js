import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainContent from "./MainContent";
import ChartSection from "./ChartSection";
import ChartRepresentation from "./ChartRepresentation";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter> {/* Wrap your App component with BrowserRouter */}
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/calculate" element={<MainContent />} />
                <Route path="/calculate/output" element={<ChartRepresentation />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
