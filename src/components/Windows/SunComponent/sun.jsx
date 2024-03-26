import SimpleQuestion from '../../SimpleQuestion';

const Sun = (props) => {
  const { sun, setSun } = props;

  return (
    <SimpleQuestion
      question="Does your home have sun-exposed south facing windows or skylights?"
      options={['Yes', 'No', 'Not Sure']}
      answer={sun}
      setAnswer={setSun}
    />
  );
};

export default Sun;
