import React, { useState, useContext } from 'react';
import { GreenEnergy, Slider } from '../components/Energy';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/Submit';
import { useSelector } from 'react-redux';

const Energy = (props) => {
  const  formData  = useSelector(state=>state.formdatacontext);
  const [energy, setEnergy] = useState(formData.energy || []);
  const [slider, setSlider] = useState(formData.slider || 0);
  const [error, setError] = useState(null);

  const validateAndProceed = () => {
    if (energy.length == 0) {
      setError('All fields must be filled out');
      return null;
    } else {
      setError(null);
      props.handleNext();
      return { energy, slider };
    }
  };

  return (
    <div className="page">
      <BackButton pageName={'Appliances'} route={'/appliances'} />
      <GreenEnergy energy={energy} setEnergy={setEnergy} />
      {energy.length > 0 && energy[0] !== 'Not Sure' ? <Slider energy={energy} slider={slider} setSlider={setSlider} /> : null}
      <SubmitButton handleNext={validateAndProceed} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Energy;
