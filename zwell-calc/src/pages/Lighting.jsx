import { useState } from "react";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/Submit";
import Efficiency from "../components/Lighting";

const Lighting = (props) => {
    const [efficiency, setEfficiency] = useState(props.efficiency || '');
    const [error, setError] = useState(null);

    const validateAndProceed = () => {
        if (!efficiency) {
            setError('All fields must be filled out');
            return null;
        } else {
            setError(null);
            props.handleNext();
            return { };
        }
    };

    return (
        <div className="page">
            <BackButton pageName={"Water"} route={"/water"}/>
            <Efficiency efficiency={efficiency} setEfficiency={setEfficiency}/>
            <SubmitButton handleNext={validateAndProceed}/>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default Lighting;