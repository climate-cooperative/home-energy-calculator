import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Zipcode = (props) => {
    const { zipcode, setZipcode, hide } = props;
    
    const handleChange = (event) => {
        setZipcode(event.target.value);
    };

    const handleSubmit = () => {
        const regex = new RegExp('^\\d{5}(-\\d{4})?$');
        if (!regex.test(zipcode)) {
            alert('Invalid zipcode');
            return;
        }
        hide(false);
    }

    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }
        }>
            <h2>What is your zip code?</h2>
            <h3>Your zip code helps us accurately model your local climate and energy data.</h3>
            <TextField 
                label="Zipcode" 
                variant="outlined" 
                value={zipcode} 
                onChange={handleChange} 
            />
            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    );
}

export default Zipcode;