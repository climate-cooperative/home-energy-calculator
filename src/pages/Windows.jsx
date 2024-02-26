import { useState } from "react";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/Submit";
import { WindowConverage, Panes, Sun, Treatments } from "../components/Windows";

const Windows = (props) => {
    const [windows, setWindows] = useState(props.windows || '');
    const [panes, setPanes] = useState(props.panes || '');
    const [sun, setSun] = useState(props.sun || '');
    const [treatments, setTreatments] = useState(props.treatments || '');
    const [error, setError] = useState(null);

    const validateAndProceed = () => {
        if (!windows || !panes || !sun || !treatments) {
            console.log(windows, panes, sun, treatments);
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
            <BackButton pageName={"Home Size"} route={"/homesize"}/>
            <WindowConverage windows={windows} setWindows={setWindows}/>
            <Panes panes={panes} setPanes={setPanes}/>
            <Sun sun={sun} setSun={setSun}/>
            <Treatments treatments={treatments} setTreatments={setTreatments}/>
            <SubmitButton handleNext={validateAndProceed}/>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default Windows;