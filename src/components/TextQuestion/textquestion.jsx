import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PopupHint from '../PopupHint';
import '../../styles/page.css';

const TextQuestion = ({ question, subtext = null, popup = null, label, value, setValue }) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (isNaN(inputValue) || inputValue < 0) {
      return;
    }
    setValue(inputValue);
  };

  return (
    <div className="component">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h2">{question}</Typography>
        {popup && <PopupHint content={popup} />}
      </div>
      {subtext && <Typography variant="h3">{subtext}</Typography>}
      <TextField label={label} variant="outlined" value={value} onChange={handleChange} />
    </div>
  );
};

export default TextQuestion;
