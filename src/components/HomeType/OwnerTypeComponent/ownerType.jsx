import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const OwnerType = (props) => {
    const [selected, setSelected] = useState(props.owner);

    const handleClick = (value) => {
        props.setOwner(value);
        setSelected(value);
    };

    useEffect(() => {
        setSelected(props.owner);
    }, [props.owner]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '70%',
        }}>
            <h2>
                Are you a homeowner or a renter?
            </h2>
            <h3>
                Answer for the home you plan to score
            </h3>
            <div>
                <Button 
                    variant="contained"
                    color={selected === 'own' ? 'secondary' : 'primary'} 
                    onClick={() => handleClick('own')}>
                    Home Owner
                </Button>
                <Button 
                    variant="contained" 
                    color={selected === 'rent' ? 'secondary' : 'primary'} 
                    onClick={() => handleClick('rent')}>
                    Renter
                </Button>
            </div>
        </div>
    );
}

export default OwnerType;