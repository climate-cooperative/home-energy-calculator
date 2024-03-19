import React, { useState } from 'react';
import { Button } from '@mui/material';
import { sparkles } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const CalcButton = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen} style={{width: '100%'}}>
                <IonIcon icon={sparkles} style={{ fontSize: '30px', margin: '10px' }} />
                How We Calculate this
            </Button>
        </div>
    );
};

export default CalcButton;