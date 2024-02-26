import { useState } from "react";
import { HasSecondary, Heat, HeatedFloors, InstallationYear, Source } from "../components/Heating";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/Submit";

const Heating = (props) => {
    const [primaryHeat, setPrimaryHeat] = useState(props.primaryHeat || '');
    const [primarySource, setPrimarySource] = useState(props.primarySource || '');
    const [installationYear, setInstallationYear] = useState(props.installationYear || '');
    const [hasSecondary, setHasSecondary] = useState(props.hasSecondaryHeat || 'No');
    const [secondaryHeat, setSecondaryHeat] = useState(props.secondaryHeat || '');
    const [secondarySource, setSecondarySource] = useState(props.primarySource || '');
    const [heatedFloors, setHeatedFloors] = useState(props.heatedFloors || {'Rooms': 0});
    const [error, setError] = useState(null);

    const validateAndProceed = () => {
        if (!primaryHeat || !primarySource || !installationYear || !heatedFloors) {
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
            <BackButton pageName={"Insulation"} route={"/insulation"}/>
            <Source source={primarySource} setSource={setPrimarySource}/>
            <Heat 
                question="What is the primary source of heat for your home?"
                label="You'll have the option to enter a fuel type for a secondary system later."
                popup="What is the primary fuel source of the unit that you use to heat your home most of the time?"
                heat={primaryHeat} 
                setHeat={setPrimaryHeat} 
                source={primarySource}
            /> 
            <InstallationYear installationYear={installationYear} setInstallationYear={setInstallationYear}/>
            <HasSecondary hasSecondary={hasSecondary} setHasSecondary={setHasSecondary}/>
            {hasSecondary.includes('Yes') ? <Source source={secondarySource} setSource={setSecondarySource}/> : null}
            <Heat 
                question="What is the secondary source of heat for your home?"
                heat={secondaryHeat} 
                setHeat={setSecondaryHeat} 
                source={secondarySource}
            />
            <HeatedFloors heatedFloors={heatedFloors} setHeatedFloors={setHeatedFloors}/>
            <SubmitButton handleNext={validateAndProceed}/>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default Heating;