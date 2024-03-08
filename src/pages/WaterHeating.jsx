import { useContext, useEffect, useState } from "react";
import { InstallationYear, Source, WaterHeater } from "../components/WaterHeater";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/Submit";
import { FormDataContext } from '../context/FormDataContext';

const WaterHeating = (props) => {
    const { formData } = useContext(FormDataContext);

    const [waterHeating, setWaterHeating] = useState(formData.waterHeating || '');
    const [fuelSource, setFuelSource] = useState(formData.fuelSource || '');
    const [installationYear, setInstallationYear] = useState(formData.installationYear || '');
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
            return { waterHeating, fuelSource, installationYear };
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