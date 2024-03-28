import ImageQuestion from '../../ImageQuestion';
import { SolarPower, WindPower } from '@mui/icons-material';

const GreenEnergy = (props) => {
  const { energy, setEnergy } = props;

  return (
    <ImageQuestion
      question="Do you produce any of the following sustainable energy sources at your home?"
      content={[
        { values: 'Solar', label: 'Solar Panels', icon: SolarPower },
        { values: 'Wind', label: 'Wind Turbine', icon: WindPower }
      ]}
      state={energy}
      setState={setEnergy}
      selectMultiple={true}
    />
  );
};

export default GreenEnergy;
