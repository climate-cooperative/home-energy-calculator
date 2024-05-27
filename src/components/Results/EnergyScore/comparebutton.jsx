import React, { useState } from 'react';
import { DialogContent, Typography, Button, LinearProgress, Box, Dialog, DialogTitle } from '@mui/material';
import { home } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const ProgressBar = ({ label, value }) => {
  const color1 = 'red';
  return(
  <Box sx={{ width: '100%', padding: '10px' }} display="flex" alignItems="center" justifyContent="space-between">
    <div style={{ width: '40%'}}>
      <Typography variant="h6" sx={{ marginBottom: '5px', fontWeight: 'bold' }}>{label}</Typography>
      <Typography variant="body1">{value} lbs of CO2 per year</Typography>
    </div>
    <LinearProgress 
      variant="determinate" 
      value={((value / 16000) * 100)}
      sx={{ width: '60%' }}
      style={{color:'red', backgroundColor:color1}}
    />
  </Box>
);}

const CompareButton = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} style={{ width: '100%' }}>
        <IonIcon icon={home} style={{ fontSize: '30px', margin: '10px' }} />
        See How You Compare!
      </Button>
      <Dialog 
        open={open} 
        onClose={handleClose}
        PaperProps={{ 
          sx: { 
            width: '40vw', 
            maxWidth: '40vw', 
            overflowX: 'hidden' 
          } 
        }}
      >
        <DialogTitle style={{display:'flex', margin:'10px'}}>
          <IonIcon icon={home} style={{ fontSize: '30px', }} /> 
          <div style={{marginLeft:'20px', fontSize:'25px', fontWeight:'bold'}}>See How You Compare!</div>
        </DialogTitle>
        <DialogContent style={{overflow : 'hidden'}}>
          <ProgressBar label="Your Home" value={props.yourHomeValue} />
          <br />
          <ProgressBar label="Average Home in Your State" value={props.avgHomeState} />
          <br />
          <ProgressBar label="Average Home in the US" value={16000} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CompareButton;
