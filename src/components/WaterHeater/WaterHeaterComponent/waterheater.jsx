import ImageQuestion from '../../ImageQuestion';
import { Apple } from '@mui/icons-material';

const WaterHeater = (props) => {
  const { waterHeating, setWaterHeating } = props;

  return (
    <ImageQuestion
      question="What type of water heater do you have?"
      content={[
        { values: 'Tank', label: 'Tank', icon: Apple },
        { values: 'Tankless', label: 'Tankless', icon: Apple },
        { values: 'Heat Pump', label: 'Heat Pump', icon: Apple }
      ]}
      state={waterHeating}
      setState={setWaterHeating}
    />
  );
};

export default WaterHeater;
