import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import PopupHint from '../PopupHint/popup';

const SelectQuestion = ({ question, subtext, label, value, setValue, options, popup=null }) => {
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="component">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h2">{question}</Typography>
                {popup && <PopupHint content={popup} />}
            </div>            
            <Typography variant="h3">{subtext}</Typography>
            <FormControl
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
            >
                <InputLabel id={`${label}-label`}>{label}</InputLabel>
                <Select
                    labelId={`${label}-label`}
                    id={`${label}-select`}
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    <MenuItem value="">Choose an option...</MenuItem>
                    {options.map((option, index) => (
                        <MenuItem key={index} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectQuestion;