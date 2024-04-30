import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import CalcButton from './calcbutton';
import CompareButton from './comparebutton';
import ViewEditButton from './vieweditbutton';
import ScoreRing from './scorering';

const EnergyScore = (props) => {
  const score = Math.floor(100 * (props.avgHomeUS / (props.avgHomeUS + props.yourHomeValue)));

  return (
    <Card>
      <CardContent>
        <Grid container direction="column" alignItems="flex-start">
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Results
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            Your Home's <span style={{ color: 'teal' }}>Clean Energy</span> Score:
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              margin: '40px 0'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#f2f0f1',
                borderRadius: '150px',
                padding: '10px 20px',
                width: '80%',
                height: '300px',
                margin: '20px'
              }}
            >
              <ScoreRing value={score} scoreLabel={'Good'} />
              <div style={{ width: '60%', marginLeft: '10px' }}>
                <h5>Score is based on the estimated CO2 emissions of your home</h5>
              </div>
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
                <Typography variant="h5" style={{ color: 'teal', fontWeight: 'bold' }}>
                  {props.yourHomeValue}
                </Typography>
                <br />
                <Typography variant="h6">
                  of CO2 per year
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EnergyScore;
