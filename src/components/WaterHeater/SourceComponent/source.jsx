import ImageQuestion from '../../ImageQuestion';
import {
  ElectricBolt,
  GasMeter,
  Propane,
  OilBarrel,
  Apple,
  QuestionMark
} from '@mui/icons-material';

const Source = (props) => {
  const { waterHeating, source, setSource } = props;

  const sourceOptions = [
    { values: 'Electric', label: 'Electric', icon: ElectricBolt },
    { values: 'Natural Gas', label: 'Natural Gas', icon: GasMeter },
    { values: 'Propane', label: 'Propane', icon: Propane },
    { values: 'Fuel Oil', label: 'Fuel Oil / Kerosene', icon: OilBarrel },
    { values: 'Bio Fuel', label: 'Bio Fuel', icon: Apple },
    { values: 'Not Sure', label: 'Not Sure', icon: QuestionMark }
  ];

  const tanklessOptions = [sourceOptions[0], sourceOptions[1], sourceOptions[5]];

  return (
    <ImageQuestion
      question="What is the primary fuel source for heating your home?"
      label="You'll have the option to enter a fuel type for a secondary system later."
      popup="What is the primary fuel source of the unit that you use to heat your home most of the time?"
      content={waterHeating === 'Tankless' ? tanklessOptions : sourceOptions}
      state={source}
      setState={setSource}
    />
  );
};

export default Source;
