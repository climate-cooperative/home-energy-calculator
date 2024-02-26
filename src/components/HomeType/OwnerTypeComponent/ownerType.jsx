import SimpleQuestion from "../../SimpleQuestion";

const OwnerType = ({ owner, setOwner }) => {
    return (
        <SimpleQuestion 
            question="What type of owner are you?" 
            subtext="Answer for the home you plan to score"
            options={['Homeowner', 'Renter']} 
            answer={owner}
            setAnswer={setOwner} 
        />
    );
}

export default OwnerType;