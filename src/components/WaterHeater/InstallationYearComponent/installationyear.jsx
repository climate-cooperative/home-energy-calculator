import React from 'react';
import SelectQuestion from '../../SelectQuestion';

const InstallationYear = (props) => {
  const { installationYear, setInstallationYear } = props;

  return (
    <SelectQuestion
      question="To the best of your knowledge when was your water heater installed?"
      options={['0-5 years ago', '6-10 years ago', '11-15 years ago', '16+ years ago', 'Not Sure']}
      value={installationYear}
      setValue={setInstallationYear}
    />
  );
};

export default InstallationYear;
