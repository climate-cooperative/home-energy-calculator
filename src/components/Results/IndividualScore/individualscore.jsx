import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';

const IndividualScore = (props) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Card onClick={handleClick}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h5">{props.icon} {props.title}</Typography>
                        <Typography variant="body1">Current: {props.current}</Typography>
                        <Typography variant="body1">Clean Energy Grade: {props.grade}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{props.title}</DialogTitle>
                <DialogContent>
                    {/* Add the content of the dialog here */}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default IndividualScore;