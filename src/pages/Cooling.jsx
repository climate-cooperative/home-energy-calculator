import { useContext, useState } from "react";
import { CoolingSystem, HasAirCond, InstallationYear } from "../components/Cooling";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/Submit";
import { FormDataContext } from '../context/FormDataContext';

const Cooling = (props) => {
    const { formData } = useContext(FormDataContext);

    const [hasAirCond, setHasAirCond] = useState(formData.hasAirCond || 'No');
    const [coolingInstallYear, setCoolingInstallYear] = useState(formData.coolingInstallYear || '');
    const [coolingSystem, setCoolingSystem] = useState(formData.airCondSystem || '');
    const [error, setError] = useState(null);

    const validateAndProceed = () => {
        if (hasAirCond === 'Yes' && (!coolingInstallYear || !coolingSystem)) {
            setError('All fields must be filled out');
            return null;
        } else {
            setError(null);
            props.handleNext();
            return { hasAirCond, coolingInstallYear, coolingSystem };
        }
    };

    return (
        <div className="page">
            <BackButton pageName={"Heating"} route={"/heating"}/>
            <HasAirCond hasAirCond={hasAirCond} setHasAirCond={setHasAirCond}/>
            { hasAirCond.includes('Yes') ? 
                <>
                    <CoolingSystem coolingSystem={coolingSystem} setCoolingSystem={setCoolingSystem}/>
                    <InstallationYear installationYear={coolingInstallYear} setInstallationYear={setCoolingInstallYear}/>
                </>
            : null}
            <SubmitButton handleNext={validateAndProceed}/>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default Cooling;