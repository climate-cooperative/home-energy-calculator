import React, { createContext, useState, useEffect } from 'react';

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    // Try to get form data from local storage
    const localData = localStorage.getItem('formData');
    return localData ? JSON.parse(localData) : {};
  });

  // Function to update form data
  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData
    }));
  };

  // Use useEffect to update local storage whenever formData changes
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};