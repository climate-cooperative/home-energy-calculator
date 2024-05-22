import React, { useState, useContext } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, Typography, Box, Grid } from '@mui/material';
import { FormDataContext } from '../../../context/FormDataContext';
import { pencil } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import './energyScore.css';

const ViewEditButton = () => {
  const { formData } = useContext(FormDataContext);
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
        <IonIcon icon={pencil} style={{ fontSize: '30px', margin: '10px' }} />
        View/Edit Answers
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className='title'>Your Survey Answers:</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                <a href='/' className='viewEditBtn'>Home Type:</a>
              </Typography>
              <Box sx={{ marginLeft: 2 }}>
                <Typography>Owner: {formData.owner}</Typography>
                <Typography>Built: {formData.homeBuilt}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                <a href='/location' className='viewEditBtn'> Location:</a>
              </Typography>
              <Box sx={{ marginLeft: 2 }}>
                <Typography>Zipcode: {formData.zipcode}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                <a href='/homesize' className='viewEditBtn'> Home Size:</a>
              </Typography>
              <Box sx={{ marginLeft: 2 }}>
                <Typography>Size: {formData.homeSize}</Typography>
                <Typography>Bedrooms: {formData.rooms.Bedrooms}</Typography>
                <Typography>Bathrooms: {formData.rooms.Bathrooms}</Typography>
                <Typography>Kitchens: {formData.rooms.Kitchens}</Typography>
                <Typography>Basements: {formData.layout.basements}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                <a href='/windows' className='viewEditBtn'> Windows:</a>
              </Typography>
              <Box sx={{ marginLeft: 2 }}>
                <Typography>Windows: {formData.windows}</Typography>
                <Typography>Panes: {formData.panes}</Typography>
                <Typography>Treatments: {formData.treatments.join(' ')}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                <a href='/insulation' className='viewEditBtn'> Insulation:</a>
              </Typography>
              <Box sx={{ marginLeft: 2 }}>
                <Typography>Insulation: {formData.insulation.join(' ')}</Typography>
                <Typography>Crawl Space: {formData.crawlSpace}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                <a href='/heating' className='viewEditBtn'> Heating:</a>
              </Typography>
              <Box sx={{ marginLeft: 2 }}>
                <Typography>Heating: {formData.primaryHeat}</Typography>
                <Typography>Heating Source: {formData.primarySource}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                <a href='/heating' className='viewEditBtn'> Secondary Heating:</a>
              </Typography>
              <Box sx={{ marginLeft: 2 }}>
                {formData.secondaryHeating ? (
                  <>
                    <Typography>Secondary Heating: {formData.secondaryHeating}</Typography>
                    <Typography>Heating Type: {formData.secondaryHeatingType}</Typography>
                  </>
                ) : (
                  <Typography>No Secondary Heating</Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                <a href='/cooling' className='viewEditBtn'> Cooling: </a>
              </Typography>
              <Box sx={{ marginLeft: 2 }}>
                {formData.hasAirCond ? (
                  <>
                    <Typography>Cooling: {formData.coolingSystem}</Typography>
                  </>
                ) : (
                  <Typography>No Cooling</Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                <a href='/waterheating' className='viewEditBtn'>Water Heater:</a>
              </Typography>
              <Box sx={{ marginLeft: 2 }}>
                <Typography>Water Heater: {formData.waterHeater}</Typography>
                <Typography>Heating Type: {formData.fuelSource}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                <a href='/lighting' className='viewEditBtn'>Lighting</a>
              </Typography>
              <Box sx={{ marginLeft: 2 }}>
                <Typography>Lighting: {formData.efficiency}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                <a href='/appliances' className='viewEditBtn'>Appliances:</a>
              </Typography>
              <Box sx={{ marginLeft: 2 }}>
                {Object.keys(formData.kitchen).map((appliance, index) => (
                  <Typography key={index}>
                    {appliance}: {formData.kitchen[appliance]}
                  </Typography>
                ))}
                {Object.keys(formData.laundry).map((appliance, index) => (
                  <Typography key={index}>
                    {appliance}: {formData.laundry[appliance]}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                <a href='/energy' className='viewEditBtn'> Energy:</a>
              </Typography>
              <Box sx={{ marginLeft: 2 }}>
                <Typography>Energy: {formData.energy}</Typography>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ViewEditButton;
