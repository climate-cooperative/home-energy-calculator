import SimpleQuestion from '../../SimpleQuestion';

const Efficiency = (props) => {
  const { efficiency, setEfficiency } = props;

  return (
    <SimpleQuestion
      question="What portion of your light fixtures are high efficiency (LED, Fluorescent etc)?"
      options={['All', 'Some', 'None', 'Not Sure']}
      answer={efficiency}
      setAnswer={setEfficiency}
    />
  );
};

export default Efficiency;
