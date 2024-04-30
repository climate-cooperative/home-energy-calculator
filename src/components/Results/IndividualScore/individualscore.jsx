import React, { useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from '@mui/material';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import ScoreDialog from './ScoreDialog';

const IndividualScore = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false); // change to true to open dialog
  };

  const handleClose = () => {
    setOpen(false);
  };

  const gradeColors = {
    'A+': 'green',
    'A-': 'green',
    'B+': 'gold',
    'B-': 'gold',
    'C+': 'red',
    'C-': 'red',
    'D+': 'red',
    'D-': 'red',
    'F': 'black'
  };

  return (
    <div>
      <Card onClick={handleClick}>
        <CardActionArea>
          <CardContent style={{ minHeight: '200px' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex">
                <IonIcon icon={props.icon} size='large' style={{ margin: '10px' }} />
                <Typography variant="h4" component="div" style={{ fontWeight: 'bold' }}>
                  {props.title}
                </Typography>
                {/* vertical line */}
                <div
                  style={{
                    borderLeft: '3px solid lightgray',
                    height: '5vh',
                    margin: '0 20px'
                  }}
                />
                <Typography
                  variant="h4"
                  component="div"
                  style={{ fontWeight: 'bold', color: gradeColors[props.grade] }}
                >
                  Grade: {props.grade}
                </Typography>
              </Box>
              <IonIcon icon={chevronForwardOutline} size='large'/>
            </Box>
            <hr style={{ height: '3px', border: 'none', backgroundColor: 'lightgray' }} />
            {/* <Typography variant="body1">Current: {props.current}</Typography> */}
            <Grid container spacing={2}>
              {props.content.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Typography variant="h5">
                    <IonIcon icon={item.icon} size='medium'/> {item.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
      <ScoreDialog
        open={open}
        handleClose={handleClose}
        icon={props.icon}
        title={props.title}
        grade={props.grade}
        gradeColors={gradeColors}
        content={props.content}
        current={props.current}
        recommended={props.recommended}
        rows={props.rows}
      />
    </div>
  );
};

export default IndividualScore;
