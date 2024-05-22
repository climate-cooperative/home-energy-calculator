import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { FormDataContext } from '../../context/FormDataContext';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../actions/actions';
const SubmitButton = (props) => {

  const dispatch = useDispatch();
  const { handleNext } = props;

  const handleSubmit = () => {
    const validatedData = handleNext();
    if (validatedData) {
      dispatch(update(validatedData));
    }
    
  };

  return (
    <Button
      onClick={handleSubmit}
      style={{
        marginTop: '40px',
        width: '100px',
        height: '50px',
        marginBottom: '50px'
      }}
    >
      Next
    </Button>
  );
};

export default SubmitButton;
