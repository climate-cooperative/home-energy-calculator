import { useEffect, useState } from "react";
import { InstallationYear, Source, WaterHeater } from "../components/WaterHeater";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/Submit";

const WaterHeating = (props) => {
    const [waterHeating, setWaterHeating] = useState(props.waterHeating || '');
    const [fuelSource, setFuelSource] = useState(props.fuelSource || '');
    const [installationYear, setInstallationYear] = useState(props.installationYear || '');
    const [error, setError] = useState(null);


    useEffect(() => {
        setFuelSource('');
    }, [waterHeating]);

    const validateAndProceed = () => {
        if (!waterHeating || !installationYear || (waterHeating !== 'Heat Pump' && !fuelSource)) {
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
            <BackButton pageName={"Cooling"} route={"/cooling"}/>
            <WaterHeater waterHeating={waterHeating} setWaterHeating={setWaterHeating}/>
            {waterHeating !== '' && waterHeating !== 'Heat Pump' ? <Source waterHeating={waterHeating} source={fuelSource} setSource={setFuelSource}/> : null}
            <InstallationYear installationYear={installationYear} setInstallationYear={setInstallationYear}/>
            <SubmitButton handleNext={validateAndProceed}/>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default WaterHeating;