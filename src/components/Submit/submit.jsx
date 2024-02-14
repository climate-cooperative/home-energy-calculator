import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { FormDataContext } from '../../context/FormDataContext';

const SubmitButton = (props) => {
  const { updateFormData } = useContext(FormDataContext);
  const { handleNext } = props;

  const handleSubmit = () => {
    const validatedData = handleNext();
    if (validatedData) {
        updateFormData(validatedData);
    }
  };

  return (
    <Button 
      onClick={handleSubmit} 
      style={{ 
        marginTop: '50px',
      }}
    >
      Next
    </Button>
  );
};

export default SubmitButton;