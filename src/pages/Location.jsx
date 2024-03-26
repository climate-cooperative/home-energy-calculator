import { useState, useContext } from 'react';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/Submit';
import Button from '@mui/material/Button';
import { Zipcode, ZipData } from '../components/Location';
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
      <BackButton pageName={'Home Type'} route={'/'} />
      <Zipcode zipcode={zipcode} setZipcode={setZipcode} />
      <Button onClick={() => hide(false)}>Next</Button>
      {error && <div className="error">{error}</div>}
      {hidden ? null : <ZipData zipcode={zipcode} />}
      {hidden ? null : <SubmitButton handleNext={validateAndProceed} />}
    </div>
  );
};

export default Location;
