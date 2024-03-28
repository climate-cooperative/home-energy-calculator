import ImageQuestion from '../../ImageQuestion';
import { ElectricBolt, GasMeter, Propane, OilBarrel, Apple } from '@mui/icons-material';

const Source = (props) => {
  const { source, setSource } = props;

  return (
    <ImageQuestion
      question="What is the primary fuel source for heating your home?"
      label="You'll have the option to enter a fuel type for a secondary system later."
      popup="What is the primary fuel source of the unit that you use to heat your home most of the time?"
      content={[
        { values: 'Electric', label: 'Electric', icon: ElectricBolt },
        { values: 'Natural Gas', label: 'Natural Gas', icon: GasMeter },
        { values: 'Propane', label: 'Propane', icon: Propane },
        { values: 'Fuel Oil', label: 'Fuel Oil / Kerosene', icon: OilBarrel },
        { values: 'Bio Fuel', label: 'Bio Fuel', icon: Apple }
      ]}
      state={source}
      setState={setSource}
    />
  );
};

export default Source;
