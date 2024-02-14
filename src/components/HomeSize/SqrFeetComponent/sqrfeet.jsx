import React from 'react';
import TextField from '@mui/material/TextField';

const SqrFeet = (props) => {
  const { sqrfeet, setSqrfeet } = props;

  const handleChange = (event) => {
    const value = event.target.value;
    if (isNaN(value) || value < 0) {
      return;
    }
    setSqrfeet(value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h2>How many square feet is your home? {/* pop up hint */}</h2>
      <h3>
        Include all finished square footage attached to your main home. Don't include detached
        units, garages, or unfinished basements.
      </h3>
      <TextField label="Square Feet" variant="outlined" value={sqrfeet} onChange={handleChange} />
    </div>
  );
};

export default SqrFeet;
