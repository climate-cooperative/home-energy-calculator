import { useState } from "react";
import { CoolingSystem, HasAirCond, InstallationYear } from "../components/Cooling";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/Submit";

const Cooling = (props) => {
    const [hasAirCond, setHasAirCond] = useState(props.hasAirCond || 'No');
    const [installationYear, setInstallationYear] = useState(props.installationYear || '');
    const [coolingSystem, setCoolingSystem] = useState(props.airCondSystem || '');
    const [error, setError] = useState(null);

    const validateAndProceed = () => {
        if (hasAirCond == 'Yes' && (!installationYear || !coolingSystem)) {
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
            <BackButton pageName={"Heating"} route={"/heating"}/>
            <HasAirCond hasAirCond={hasAirCond} setHasAirCond={setHasAirCond}/>
            { hasAirCond.includes('Yes') ? 
                <>
                    <CoolingSystem coolingSystem={coolingSystem} setCoolingSystem={setCoolingSystem}/>
                    <InstallationYear installationYear={installationYear} setInstallationYear={setInstallationYear}/>
                </>
            : null}
            <SubmitButton handleNext={validateAndProceed}/>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default Cooling;