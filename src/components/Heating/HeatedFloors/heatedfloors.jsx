import CounterQuestion from '../../CounterQuestion';

const HeatedFloors = (props) => {
  const { heatedFloors, setHeatedFloors } = props;

  return (
    <CounterQuestion
      question="How many rooms have heated floors?"
      content={[{ label: 'Rooms', incrementValue: 1, decrementValue: 1 }]}
      state={heatedFloors}
      setState={setHeatedFloors}
    />
  );
};

export default HeatedFloors;
