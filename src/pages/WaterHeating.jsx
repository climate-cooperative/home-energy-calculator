import React, { useContext, useEffect, useState } from 'react';
import { InstallationYear, Source, WaterHeater } from '../components/WaterHeater';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/Submit';
import { useSelector } from 'react-redux';

const WaterHeating = (props) => {
  const  formData  = useSelector(state=>state.formdatacontext);

  const [waterHeating, setWaterHeating] = useState(formData.waterHeating || '');
  const [fuelSource, setFuelSource] = useState(formData.fuelSource || '');
  const [waterHeatingInstallYear, setWaterHeatingInstallYear] = useState(
    formData.waterHeatingInstallYear || ''
  );
  const [error, setError] = useState(null);

  const getWaterHeater = () => {
    if (waterHeating === 'Heat Pump') {
      return 'Geothermal Heat Pump'; 
    } else if (waterHeating === 'Tankless') {
      return (fuelSource === 'Electric') ? 'Electric Tankless Water Heater' : 'Natural Gas Tankless Water Heater';
    } else if (waterHeating === 'Tank') {
      return (fuelSource === 'Electric') ? 'Electric Tank Water Heater' : 
        (fuelSource === 'Natural Gas') ? 'Natural Gas Tank Water Heater' :
        (fuelSource === 'Propane') ? 'Propane Tank Water Heater' : 
        'Fuel Oil Tank Water Heater';
    }
  }

  useEffect(() => {
    if(waterHeating && waterHeating === 'Heat Pump') {
      setFuelSource('Electric');
    }
  }, [waterHeating]);

  const validateAndProceed = () => {
    if (
      !waterHeating ||
      !waterHeatingInstallYear ||
      (waterHeating !== 'Heat Pump' && !fuelSource)
    ) {
      setError('All fields must be filled out');
      return null;
    } else {
      setError(null);
      props.handleNext();
      const waterHeater = getWaterHeater();
      return { waterHeater, waterHeating, fuelSource, waterHeatingInstallYear};
    }
  };

  return (
    <div className="page">
      <BackButton pageName={'Cooling'} route={'/cooling'} />
      <WaterHeater waterHeating={waterHeating} setWaterHeating={setWaterHeating} />
      {waterHeating !== '' && waterHeating !== 'Heat Pump' ? (
        <Source waterHeating={waterHeating} source={fuelSource} setSource={setFuelSource} />
      ) : null}
      <InstallationYear
        installationYear={waterHeatingInstallYear}
        setInstallationYear={setWaterHeatingInstallYear}
      />
      <SubmitButton handleNext={validateAndProceed} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default WaterHeating;
