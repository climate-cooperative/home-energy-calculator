import React, { useState, useContext } from 'react';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/Submit';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import { Zipcode, ZipData } from '../components/Location';
import { FormDataContext } from '../context/FormDataContext';
import { validateZipCode } from '../helpers/api';
import '../styles/page.css';

const Location = (props) => {
  const { formData } = useContext(FormDataContext);
  const [zipcode, setZipcode] = useState(formData.zipcode || '');
  const [hidden, hide] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateAndProceed = async () => {
    if (!zipcode) {
      setError('All fields must be filled out');
      return null;
    } else {
      const result = await validateZipCode(zipcode);
      if (result) {
        setLoading(false);
        setError(null);
        setZipcode(zipcode);
        props.handleNext();
        return { zipcode };
      } else {
        findValidZipCode(zipcode);
      }
    }
  };

  const findValidZipCode = async (originalZip) => {
    setLoading(true);
    let adjustment = 0;
    while (true) {
      const nextZip = parseInt(originalZip) + adjustment;
      const prevZip = parseInt(originalZip) - adjustment;
      let result = await validateZipCode(nextZip);
      if (result) {
        setError(`Invalid ZIP code provided. Using nearest valid ZIP code: ${nextZip}`);
        setZipcode(nextZip.toString());
        setLoading(false);
        break;
      }
      if (nextZip !== prevZip) {
        let result = await validateZipCode(prevZip);
        if (result) {
          setError(`Invalid ZIP code provided. Using nearest valid ZIP code: ${prevZip}`);
          setZipcode(prevZip.toString());
          setLoading(false);
          break;
        }
      }
      adjustment++;
    }
  };

  return (
    <div className="page">
      <BackButton pageName={'Home Type'} route={'/'} />
      <Zipcode zipcode={zipcode} setZipcode={setZipcode} />
      <Button onClick={() => hide(false)}>Next</Button>
      {loading && <CircularProgress color="secondary" style={{ marginTop: '10px' }} />}
      {error && <div className="error">{error}</div>}
      {hidden ? null : <ZipData zipcode={zipcode} />}
      {hidden ? null : <SubmitButton handleNext={validateAndProceed} disabled={loading} />}
    </div>
  );
};

export default Location;
