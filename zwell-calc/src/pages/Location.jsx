import { useState, useContext } from "react";
import SubmitButton from "../components/Submit";
import Zipcode from "../components/Location";
import { FormDataContext } from '../context/FormDataContext';
import '../styles/page.css';

const Location = (props) => {
    const { formData } = useContext(FormDataContext);
    const [zipcode, setZipcode] = useState(formData.zipcode || '');
    const [hidden, hide] = useState(true);
    const [error, setError] = useState(null);

    const validateAndProceed = () => {
        if (!zipcode) {
            setError('All fields must be filled out');
            return null;
        } else {
            setError(null);
            props.handleNext();
            return { zipcode };
        }
    };

    return (
        <div className="page">
            <Zipcode zipcode={zipcode} setZipcode={setZipcode} hide={hide}/>
            {error && <div className="error">{error}</div>}
            {hidden ? null : <SubmitButton handleNext={validateAndProceed}/>}
        </div>
    );
}

export default Location;