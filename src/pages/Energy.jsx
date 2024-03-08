import { useState, useContext } from "react";
import { GreenEnergy, Slider } from "../components/Energy";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/Submit";
import { FormDataContext } from '../context/FormDataContext';

const Energy = (props) => {
    const { formData } = useContext(FormDataContext);
    const [energy, setEnergy] = useState(formData.energy || []);
    const [slider, setSlider] = useState(formData.slider || 0);
    const [error, setError] = useState(null);

    const validateAndProceed = () => {
        if (energy.length == 0) {
            setError('All fields must be filled out');
            return null;
        } else {
            setError(null);
            props.handleNext();
            return { energy, slider };
        }
    };

    return (
        <div className="page">
            <BackButton pageName={"Appliances"} route={"/appliances"}/>
            <GreenEnergy energy={energy} setEnergy={setEnergy}/>
            {energy.length > 0 ? <Slider energy={energy} slider={slider} setSlider={setSlider}/> : null}
            <SubmitButton handleNext={validateAndProceed}/>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default Energy;