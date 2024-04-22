import React from 'react';
import SimpleQuestion from '../../SimpleQuestion';

const Efficiency = (props) => {
  const { efficiency, setEfficiency } = props;

  return (
    <SimpleQuestion
      question="What portion of your light fixtures are high efficiency (LED, Fluorescent etc)?"
      options={['All', 'Most', 'Some', 'Not Sure', 'None']}
      answer={efficiency}
      setAnswer={setEfficiency}
    />
  );
};

export default Efficiency;
