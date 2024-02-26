import SimpleQuestion from "../../SimpleQuestion";

const HasAirCond = (props) => {
    const { hasAirCond, setHasAirCond } = props;

    return (
        <SimpleQuestion 
            question="Does your home have air conditioning?" 
            options={['Yes', 'No']} 
            answer={hasAirCond}
            setAnswer={setHasAirCond} 
        />
    );
}

export default HasAirCond;