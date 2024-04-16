import React from 'react';
import SelectQuestion from '../../SelectQuestion';

const HomeBuilt = ({ homeBuilt, setHomeBuilt }) => {
  return (
    <SelectQuestion
      question="When was your home built?"
      label="Year"
      value={homeBuilt}
      setValue={setHomeBuilt}
      options={[
        '2020+',
        '2010-2019',
        '2000-2009',
        '1990-1999',
        '1980-1989',
        '1970-1979',
        '1960-1969',
        '1950-1959',
        '1940-1949',
        '1930-1939',
        '1920-1929',
        '1910-1919',
        '1900-1909',
        'pre 1900',
        "I don't know"
      ]}
    />
  );
};

export default HomeBuilt;
