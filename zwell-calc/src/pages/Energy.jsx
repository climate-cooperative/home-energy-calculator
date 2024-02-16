import { useState } from "react";
import { GreenEnergy, Slider } from "../components/Energy";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/Submit";

const Energy = (props) => {
    const [energy, setEnergy] = useState(props.energy || []);
    const [slider, setSlider] = useState(props.slider || 1);
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
            <BackButton pageName={"Appliances"} route={"/appliances"}/>
            <GreenEnergy energy={energy} setEnergy={setEnergy}/>
            {energy.length > 0 ? <Slider energy={energy} slider={slider} setSlider={setSlider}/> : null}
            <SubmitButton handleNext={validateAndProceed}/>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default Energy;