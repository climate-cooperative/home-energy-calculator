import React from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CounterItem = ({ label, count, incrementValue, decrementValue, setCount }) => {
    const handleIncrement = () => {
        setCount(prevCount => ({...prevCount, [label]: prevCount[label] + incrementValue}));
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(prevCount => ({...prevCount, [label]: prevCount[label] - decrementValue}));
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <IconButton color="secondary" onClick={handleDecrement}>
                <RemoveIcon />
            </IconButton>
            <TextField 
                label={label} 
                variant="outlined" 
                value={count} 
                InputProps={{
                    readOnly: true,
                }}
                style={{ 
                    margin: '0 10px',
                    width: '100px',
                }}
            />
            <IconButton color="secondary" onClick={handleIncrement}>
                <AddIcon />
            </IconButton>
        </div>
    );
}

export default CounterItem;