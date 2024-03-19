import React, { useState, useContext } from 'react';
import { Button } from '@mui/material';
import { home } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const CompareButton = () => {
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
                <IonIcon icon={home} style={{ fontSize: '30px', margin: '10px' }} />
                See How You Compare!
            </Button>
        </div>
    );
};

export default CompareButton;