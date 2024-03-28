import CounterQuestion from '../../CounterQuestion';

const Kitchen = (props) => {
  const { kitchen, setKitchen } = props;

  return (
    <CounterQuestion
      question="What type of kitchen appliances do you have?"
      content={[
        // natural gas, electric, induction cooktops
        { label: 'Natural Gas Cooktop', incrementValue: 1, decrementValue: 1 },
        { label: 'Electric Cooktop', incrementValue: 1, decrementValue: 1 },
        { label: 'Induction Cooktop', incrementValue: 1, decrementValue: 1 },
        // ovens
        { label: 'Natural Gas Oven', incrementValue: 1, decrementValue: 1 },
        { label: 'Electric Oven', incrementValue: 1, decrementValue: 1 },
        // dishwashers
        { label: 'Dishwasher', incrementValue: 1, decrementValue: 1 }
      ]}
      state={kitchen}
      setState={setKitchen}
    />
  );
};

export default Kitchen;
