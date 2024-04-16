import React from 'react';
import SliderQuestion from '../../SliderQuestion';

const Slider = (props) => {
  const { slider, setSlider } = props;

  return (
    <SliderQuestion
      question="About how much of your monthly energy needs does your wind or solar set up cover?"
      answer={slider}
      setAnswer={setSlider}
      min={1}
      max={100}
      step={1}
    />
  );
};

export default Slider;
