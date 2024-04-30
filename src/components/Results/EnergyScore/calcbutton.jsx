import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';

const getScoreColor = (score) => {
  if (score < 50) {
    return 'darkred';
  } else if (score < 75) {
    return 'gold';
  } else {
    return 'teal';
  }
};

const ScoreBlock = ({ score }) => (
  <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '50vh' }}>
    <Typography variant="h4" align="center">Your Home's Clean Energy Score:</Typography>
    <Typography variant="h2" align="center" style={{ color: getScoreColor(score) }}>{score} out of 100</Typography>
    <Typography variant="body1" align="center">Your score is based on the estimated CO2 emissions of your home.</Typography>
    <Box mt={3}>
      <Typography variant="body1" align="center">
        <span style={{ color: 'darkred' }}>0</span> = the highest possible emissions
      </Typography>
      <Typography variant="body1" align="center">
        <span style={{ color: 'gold' }}>50</span> = an average home
      </Typography>
      <Typography variant="body1" align="center">
        <span style={{ color: 'teal' }}>100</span> = a zero-emissions home
      </Typography>
    </Box>
  </Grid>
);

const ScoreDetailsCard = (props) => {
  const {
    zipCode,
    state,
    solarIndex,
    heatingDegreeDays,
    coolingDegreeDays,
    groundWaterTemp,
    homeVolume,
    airChangesPerHour,
    wallRValue,
    atticRValue,
    glazingPercentage,
    heatLoss,
    heatGain
  } = props.props;
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          The Science Behind Your Score
        </Typography>
        <Typography paragraph>
          Many things go into estimating the CO₂ emissions of a home - the size of your home, the outside temperature through the year, the materials and insulation in your home, and much more!
        </Typography>
        <Typography paragraph>
          Here's a look at what we estimated some of those factors to be based on your answers.
        </Typography>
        
        <Box my={2}>
          <Typography variant="subtitle1">What we estimate:</Typography>
          
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Your Location</Typography>
              <Typography>- Zip Code: {zipCode}</Typography>
              <Typography>- State: {state}</Typography>
              <Typography>- Annual Heating Degree Days: {heatingDegreeDays}</Typography>
              <Typography>- Annual Cooling Degree Days: {coolingDegreeDays}</Typography>
              <Typography>- Average Ground Water Temp: {groundWaterTemp}° F</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Your Home</Typography>
              <Typography>- Home Volume: {homeVolume} ft³</Typography>
              <Typography>- Air Changes per Hour (ACH): {airChangesPerHour}</Typography>
              <Typography>- Insulated Wall R Value: {wallRValue}</Typography>
              <Typography>- Insulated Attic/Roof R Value: {atticRValue}</Typography>
              <Typography>- Glazing Percentage: {glazingPercentage}%</Typography>
              <Typography>- Annual BTUs of Heat Loss: {heatLoss} million</Typography>
              <Typography>- Annual BTUs of Solar Heat Gain: {heatGain} million</Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

const CalcButton = (props) => {
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
        <IonIcon icon={star} style={{ fontSize: '30px', margin: '10px' }} />
        <Typography variant="h6">How We Calculate this</Typography>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Calculation Guide:</DialogTitle>
        <DialogContent>
          <ScoreBlock score={props.score} />
          <ScoreDetailsCard
            props={props.details}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CalcButton;
