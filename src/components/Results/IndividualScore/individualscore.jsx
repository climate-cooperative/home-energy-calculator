import React, { useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent
} from '@mui/material';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';

const IndividualScore = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const gradeColors = {
    A: 'green',
    B: 'gold',
    C: 'red',
    D: 'red',
    E: 'red',
    F: 'red'
  };

  return (
    <div>
      <Card onClick={handleClick}>
        <CardActionArea>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" alignItems="center">
                <IonIcon icon={props.icon} style={{ fontSize: '30px', margin: '10px' }} />
                <Typography variant="h5" component="div" style={{ fontWeight: 'bold' }}>
                  {props.title}
                </Typography>
                {/* vertical line */}
                <div
                  style={{
                    borderLeft: '2px solid lightgray',
                    height: '20px',
                    marginRight: '10px',
                    marginLeft: '10px'
                  }}
                />
                <Typography
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 'bold', color: gradeColors[props.grade] }}
                >
                  Grade: {props.grade}
                </Typography>
              </Box>
              <IonIcon icon={chevronForwardOutline} style={{ fontSize: '30px' }} />
            </Box>
            <hr style={{ color: 'lightgray' }} />
            <Typography variant="body1">Current: {props.current}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>{/* Add the content of the dialog here */}</DialogContent>
      </Dialog>
    </div>
  );
};

export default IndividualScore;
