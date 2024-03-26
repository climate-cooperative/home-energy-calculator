import SimpleQuestion from '../../SimpleQuestion';

const HasSecondary = (props) => {
  const { hasSecondary, setHasSecondary } = props;

  return (
    <SimpleQuestion
      question="Does your home depend on a secondary heating source?"
      label="Don't include sources only used occasionally or for recreation."
      options={['Yes', 'No', 'Not Sure']}
      answer={hasSecondary}
      setAnswer={setHasSecondary}
    />
  );
};

export default HasSecondary;
