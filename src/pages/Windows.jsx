import { useState } from "react";
import SubmitButton from "../components/Submit";

const Windows = (props) => {
    const [error, setError] = useState(null);

    const validateAndProceed = () => {
        if (true) {
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
            {error && <div className="error">{error}</div>}
            <SubmitButton handleNext={validateAndProceed}/>
        </div>
    );
}

export default Windows;