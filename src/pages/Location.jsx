import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import SubmitButton from '../components/Submit';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import { Zipcode, ZipData } from '../components/Location';
import { useSelector } from 'react-redux';
import { validateZipCode } from '../helpers/api';

const Location = (props) => {
  const formData = useSelector(state => state.formdatacontext);
  const [zipcode, setZipcode] = useState(formData.zipcode || '');
  const [hidden, hide] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    const handleZipcodeValidation = async () => {
      if (zipcode) {
        console.log("starting");
        setLoading(true);
        if ((await validateZipCode(zipcode))) { // if valid
          setLoading(false);
          setError(null);
        } else {
          await findValidZipCode(zipcode)
        }
      }
    };

    handleZipcodeValidation()
  }, [zipcode]);

  const validateAndProceed = () => {

    if (!zipcode) {
      setError('All fields must be filled out');
      return null;
    } else if (!loading && !error) {
      props.handleNext();
      console.log(`RESULT = ${zipcode}`);
      return { zipcode };
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
      {!hidden && <ZipData zipcode={zipcode} />}
      {!hidden && <SubmitButton handleNext={validateAndProceed} disabled={loading} />}
    </div>
  );
};

export default Location;