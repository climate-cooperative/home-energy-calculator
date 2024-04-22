import React from 'react';
import ImageQuestion from '../../ImageQuestion';
import { HeatPump, Air, AcUnit } from '@mui/icons-material';

const CoolingSystem = (props) => {
  const { coolingSystem, setCoolingSystem } = props;

  const coolingSystemOptions = [
    {
      values: 'Central AC Unit',
      label: 'Central Air Conditioning',
      icon: Air
    },
    {
      values: 'Ducted Air Source Heat Pump',
      label: 'Ducted Heat Pump',
      icon: HeatPump
    },
    {
      values: 'Heat Pump with Mini Splits',
      label: 'Ductless / Mini-Split Heat Pump',
      icon: HeatPump
    },
    {
      values: 'Portable AC Unit',
      label: 'Portable A/C',
      icon: AcUnit
    }
  ];

  return (
    <ImageQuestion
      question="What types(s) of cooling system do you have?"
      content={coolingSystemOptions}
      state={coolingSystem}
      setState={setCoolingSystem}
    />
  );
};

export default CoolingSystem;
