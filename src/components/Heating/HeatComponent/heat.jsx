import { useEffect } from 'react';
import ImageQuestion from '../../ImageQuestion';
import { Apple } from '@mui/icons-material';

const Heat = (props) => {
  const { question, label, heat, setHeat, source, popup } = props;

  const heatOptions = [
    /*0*/ { values: 'Forced Air', label: 'Forced Air Furnace', icon: Apple },
    /*1*/ { values: 'Boiler', label: 'Boiler / Radiator', icon: Apple },
    /*2*/ { values: 'Baseboard', label: 'Baseboard', icon: Apple },
    /*3*/ { values: 'Radiant', label: 'Radiant Floor', icon: Apple },
    /*4*/ { values: 'Air Source Heat Pump', label: 'Air Source Heat Pump', icon: Apple },
    /*5*/ { values: 'Geothermal Heat Pump', label: 'Geothermal Heat Pump', icon: Apple },
    /*6*/ { values: 'Space Heater', label: 'Space Heater', icon: Apple },
    /*7*/ { values: 'Fireplace Insert / Stove', label: 'Fireplace Insert / Stove', icon: Apple },
    /*8*/ { values: 'Wood Stove', label: 'Wood Stove', icon: Apple },
    /*9*/ { values: 'Fireplace', label: 'Fireplace', icon: Apple },
    /*10*/ { values: 'Pellet Stove', label: 'Pellet Stove', icon: Apple }
  ];

  // source will have different options based on the primary heating source
  const Electricity = heatOptions.slice(0, 6);
  const Gas = [heatOptions[0], heatOptions[1], heatOptions[7], heatOptions[8]];
  const PropaneAndOil = [heatOptions[0], heatOptions[1], heatOptions[6]];
  const Wood = heatOptions.slice(8, 10);

  useEffect(() => {
    setHeat('');
  }, [source]);

  return (
    <>
      {source !== '' ? (
        <ImageQuestion
          question={question}
          label={label}
          popup={popup}
          content={
            source === 'Electric'
              ? Electricity
              : source === 'Natural Gas'
                ? Gas
                : source === 'Propane' || source === 'Fuel Oil'
                  ? PropaneAndOil
                  : source === 'Bio Fuel'
                    ? Wood
                    : []
          }
          state={heat}
          setState={setHeat}
        />
      ) : null}
    </>
  );
};

export default Heat;
