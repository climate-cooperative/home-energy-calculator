import { useState, useContext } from "react";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/Submit";
import Efficiency from "../components/Lighting";
import { FormDataContext } from '../context/FormDataContext';

const Lighting = (props) => {
    const { formData } = useContext(FormDataContext);
    const [efficiency, setEfficiency] = useState(formData.efficiency || '');
    const [error, setError] = useState(null);

    const validateAndProceed = () => {
        if (!efficiency) {
            setError('All fields must be filled out');
            return null;
        } else {
            setError(null);
            props.handleNext();
            return { efficiency };
        }
    };

    return (
        <div className="page">
            <BackButton pageName={"Water"} route={"/waterheating"}/>
            <Efficiency efficiency={efficiency} setEfficiency={setEfficiency}/>
            <SubmitButton handleNext={validateAndProceed}/>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default Lighting;