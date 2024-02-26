import ImageQuestion from "../../ImageQuestion";
import { HouseSiding, Roofing, Cancel } from '@mui/icons-material';

const HomeInsulation = (props) => {
    const {insulation, setInsulation} = props;
    
    return (
        <ImageQuestion
            question="Has supplemental insulation been added to your home since it was built?"
            label="Select all that apply"
            content={[
                { values: 'Walls', label: 'Yes, Walls', icon: HouseSiding },
                { values: 'Attic', label: 'Yes, Attic', icon: Roofing },
                { values: 'Not Sure', label: 'No / Not Sure', icon: Cancel }
            ]}
            state={insulation}
            setState={setInsulation}
            selectMultiple={true}
        />
    );
}

export default HomeInsulation;