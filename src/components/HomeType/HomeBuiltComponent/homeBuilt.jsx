import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const HomeBuilt = (props) => {
  const handleChange = (event) => {
    props.setHomeBuilt(event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        margin: 'auto'
      }}
    >
      <h2>When was your home built?</h2>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="year-label">Year</InputLabel>
        <Select
          labelId="year-label"
          id="year-select"
          value={props.homeBuilt}
          label="Year"
          onChange={handleChange}
        >
          <MenuItem value="">Choose an option...</MenuItem>
          <MenuItem value="2020+">2020+</MenuItem>
          <MenuItem value="2010-2019">2010-2019</MenuItem>
          <MenuItem value="2000-2009">2000-2009</MenuItem>
          <MenuItem value="1990-1999">1990-1999</MenuItem>
          <MenuItem value="1980-1989">1980-1989</MenuItem>
          <MenuItem value="1970-1979">1970-1979</MenuItem>
          <MenuItem value="1960-1969">1960-1969</MenuItem>
          <MenuItem value="1950-1959">1950-1959</MenuItem>
          <MenuItem value="1940-1949">1940-1949</MenuItem>
          <MenuItem value="1930-1939">1930-1939</MenuItem>
          <MenuItem value="1920-1929">1920-1929</MenuItem>
          <MenuItem value="1910-1919">1910-1919</MenuItem>
          <MenuItem value="1900-1909">1900-1909</MenuItem>
          <MenuItem value="pre 1900">pre 1900</MenuItem>
          <MenuItem value="I don't know">I don't know</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default HomeBuilt;
