import ImageQuestion from "../../ImageQuestion";
import {
    HeatPump,
    Air,
    AcUnit,
} from '@mui/icons-material';

const CoolingSystem = (props) => {
    const { coolingSystem, setCoolingSystem } = props;

    const coolingSystemOptions = [{
        values: 'Central Air Conditioning',
        label: 'Central Air Conditioning',
        icon: Air
    }, {
        values: 'Ducted Heat Pump',
        label: 'Ducted Heat Pump',
        icon:  HeatPump
    }, {
        values: 'Ductless / Mini-Split Heat Pump',
        label: 'Ductless / Mini-Split Heat Pump',
        icon:  HeatPump
    }, {
        values: 'Portable A/C',
        label: 'Portable A/C',
        icon: AcUnit
    }];

    return (
        <ImageQuestion 
            question="What type of cooling system do you have?" 
            content={coolingSystemOptions} 
            state={coolingSystem}
            setState={setCoolingSystem} 
        />
    );
}

export default CoolingSystem;