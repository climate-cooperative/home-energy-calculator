import { useState } from "react";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/Submit";
import { Siding, HomeInsulation } from "../components/Insulation";

const Insulation = (props) => {
    const [siding, setSiding] = useState(props.siding || '');
    const [insulation, setInsulation] = useState(props.insulation || '');
    const [error, setError] = useState(null);

    const validateAndProceed = () => {
        if (!siding || !insulation) {
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
            <BackButton pageName={"Windows"} route={"/windows"}/>
            <Siding siding={siding} setSiding={setSiding}/>
            <HomeInsulation insulation={insulation} setInsulation={setInsulation}/>
            <SubmitButton handleNext={validateAndProceed}/>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default Insulation;