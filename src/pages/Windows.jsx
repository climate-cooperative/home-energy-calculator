import { useState, useContext } from "react";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/Submit";
import { WindowConverage, Panes, Sun, Treatments } from "../components/Windows";
import { FormDataContext } from '../context/FormDataContext';

const Windows = (props) => {
    const { formData } = useContext(FormDataContext);

    const [windows, setWindows] = useState(formData.windows || '');
    const [panes, setPanes] = useState(formData.panes || '');
    const [sun, setSun] = useState(formData.sun || '');
    const [treatments, setTreatments] = useState(formData.treatments || '');
    const [error, setError] = useState(null);

    const validateAndProceed = () => {
        if (!windows || !panes || !sun || !treatments) {
            console.log(windows, panes, sun, treatments);
            setError('All fields must be filled out');
            return null;
        } else {
            setError(null);
            props.handleNext();
            return { windows, panes, sun, treatments };
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