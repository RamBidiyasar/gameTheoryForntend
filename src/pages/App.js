import Button from '../elements/Button';
import ProblemSolution from "../elements/ProblemSolution"; // Import the ChartSection component
import { useNavigate } from "react-router-dom";


function App() {

    const navigate = useNavigate();

    const goToFixDataPage = () => {
        navigate("/calculate/dummy");
    };

    const uploadFile = ()=>{
        navigate("/calculate/upload")
    }

    return (
        <div className="outer-container">
            <div className="inner-container">
                <ProblemSolution />
                <h3>Find worth of channels by:</h3>
                <Button onClick={goToFixDataPage} label="Existing data" />
                <Button onClick={uploadFile} label="Uploading file" />
            </div>
        </div>
    );

}

export default App;
