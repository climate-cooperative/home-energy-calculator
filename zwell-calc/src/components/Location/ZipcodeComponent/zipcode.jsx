import TextQuestion from "../../TextQuestion";

const Zipcode = (props) => {
    const { zipcode, setZipcode } = props;

    return (
        <TextQuestion 
            question="What is your zip code?" 
            subtext="We use your zip code to determine the local climate and building codes for your area."
            label="Zip Code"
            value={zipcode} 
            setValue={setZipcode} 
        />
    );
}

export default Zipcode;