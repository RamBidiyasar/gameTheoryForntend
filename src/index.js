import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import FixDataCalculation from "./pages/FixDataCalculation";
import ChartSection from "./elements/ChartSection";
import ChartRepresentation from "./pages/ChartRepresentation";
import UploadContent from "./pages/UploadContent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter> {/* Wrap your App component with BrowserRouter */}
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/calculate/dummy" element={<FixDataCalculation />} />
                <Route path="/calculate/output" element={<ChartRepresentation />} />
                <Route path= "/calculate/upload" element={<UploadContent/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
