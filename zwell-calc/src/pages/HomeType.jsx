import { useState, useContext } from "react";
import { OwnerType, HomeSize, HomeBuilt } from "../components/HomeType";
import SubmitButton from "../components/Submit";
import '../styles/page.css';
import { FormDataContext } from '../context/FormDataContext';

const HomeType = (props) => {
    const { formData } = useContext(FormDataContext);

    const [owner, setOwner] = useState(formData.owner || '');
    const [homeSize, setHomeSize] = useState(formData.homeSize || '');
    const [homeBuilt, setHomeBuilt] = useState(formData.homeBuilt || '');
    const [error, setError] = useState(null);

    const validateAndProceed = () => {
        if (!owner || !homeSize || !homeBuilt) {
            setError('All fields must be filled out');
            return null;
        } else {
            setError(null);
            props.handleNext();
            return { owner, homeSize, homeBuilt };
        }
    };

    return (
        <div className="page">
            <OwnerType owner={owner} setOwner={setOwner}/>
            <HomeSize homeSize={homeSize} setHomeSize={setHomeSize}/>
            <HomeBuilt homeBuilt={homeBuilt} setHomeBuilt={setHomeBuilt}/>
            <SubmitButton handleNext={validateAndProceed}/>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default HomeType;