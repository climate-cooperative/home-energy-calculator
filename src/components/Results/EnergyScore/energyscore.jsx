import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import CalcButton from './calcbutton';
import CompareButton from './comparebutton';
import ViewEditButton from './vieweditbutton';
import ScoreRing from './scorering';

const EnergyScore = (props) => {
  let score = Math.floor(100 * (props.avgHomeUS / (props.avgHomeUS + props.yourHomeValue)));
  const [scoretext, setScoretext] = useState('');
  useEffect(() => {
    if (score<25)setScoretext('Bad');
    else if (score<50) setScoretext('OK');
    else if (score<75) setScoretext('Good');
    else scoretext = setScoretext ('Awesome');
  }, [score]);
  
  
  return (
    <Card>
      <CardContent>
        <Grid container direction="column" alignItems="flex-start">
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', fontSize: "27px"}}>
            Results
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: "20px"}}>
            Your Home's <span style={{ color: 'teal' }}>Clean Energy</span> Score:
          </Typography>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#f2f0f1',
              borderRadius: '100px',
              padding: '10px 20px',
              height: '200px',
              margin: '20px'
            }}
          >
            <div style={{ width: '100%', height: '100%', marginRight: '20px' }}>
<<<<<<< HEAD
              <ScoreRing value={score} scoreLabel={scoretext} />
=======
              <ScoreRing value={score} scoreLabel={'Good'} />
>>>>>>> 2d0582763e77efc4872f006f59503c9e54f52b46
            </div>
            <div style={{ width: '60%' }}>
              <h5>Score is based on the estimated CO2 emissions of your home</h5>
            </div>
          </div>
          <Grid container justifyContent="space-between">
            <Grid item xs={8}>
              <CalcButton
                score={score}
                details={props.details}
              />
              <CompareButton
                yourHomeValue={props.yourHomeValue}
                avgHomeState={props.avgHomeState}
                avgHomeUS={props.avgHomeUS}
              />
              <ViewEditButton />
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  width: '100%',
                  boxShadow:
                    '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
                  margin: '10px 0px',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  lineHeight: '1.75',
                  letterSpacing: '0.02857em',
                  textTransform: 'uppercase',
                  fontWeight: '500',
                  textAlign: 'center',
                  cursor: 'default',
                  height: '90%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span style={{ color: 'teal', fontSize: '20', fontWeight: 'bold' }}>
                  {props.yourHomeValue}
                </span>
                <br />
                of CO2 per year
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EnergyScore;
