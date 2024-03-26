import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SliderQuestion = ({ question, answer, setAnswer, min, max, step }) => {
  const [sliderOpacity, setSliderOpacity] = useState(1);
  const [isNotSure, setIsNotSure] = useState(false);

  const handleSliderChange = (event, newValue) => {
    setAnswer(newValue);
    setIsNotSure(false);
    setSliderOpacity(1);
  };

  const handleNotSureClick = () => {
    const newIsNotSure = !isNotSure;
    setIsNotSure(newIsNotSure);
    setAnswer(newIsNotSure ? null : answer);
    setSliderOpacity(newIsNotSure ? 0.5 : 1);
  };

  return (
    <div className="component">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h2">{question}</Typography>
      </div>
      <div style={{ opacity: sliderOpacity, width: '200px' }}>
        <Slider
          value={answer}
          onChange={handleSliderChange}
          aria-labelledby="continuous-slider"
          min={min}
          max={max}
          step={step}
          disabled={isNotSure}
          valueLabelDisplay="auto"
          color="secondary"
        />
      </div>
      <Button onClick={handleNotSureClick}>{isNotSure ? 'Sure' : 'Not Sure'}</Button>
    </div>
  );
};

export default SliderQuestion;
