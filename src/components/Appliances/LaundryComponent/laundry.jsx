import React from 'react';
import CounterQuestion from '../../CounterQuestion';

const Laundry = (props) => {
  const { laundry, setLaundry } = props;

  return (
    <CounterQuestion
      question="How many laundry machines do you have?"
      content={[
        { label: 'Washers', incrementValue: 1, decrementValue: 1 },
        { label: 'Natural Gas Dryer', incrementValue: 1, decrementValue: 1 },
        { label: 'Electric Dryer', incrementValue: 1, decrementValue: 1 },
        { label: 'Heat Pump Dryer', incrementValue: 1, decrementValue: 1 }
      ]}
      state={laundry}
      setState={setLaundry}
    />
  );
};

export default Laundry;
