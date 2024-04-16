import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
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
import { documentText, bulb } from 'ionicons/icons';
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
            {/* <Typography variant="body1">Current: {props.current}</Typography> */}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {props.content.map((item, index) => (
                <Typography key={index} variant="body1" style={{ margin: '10px' }}>
                  <IonIcon icon={item.icon}/> {item.title}
                </Typography>
              ))}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <IonIcon icon={props.icon} style={{ fontSize: '30px', marginRight: '10px' }} />
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
        </DialogTitle>
        <DialogContent>
          <hr style={{ color: 'lightgray' }} />
          <Typography variant="h2" marginTop={2}>
            <IonIcon icon={documentText} style={{ marginRight: '10px' }}/> System Report Card
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {props.content.map((item, index) => (
              <Typography key={index} variant="body1" style={{ marginRight: '10px' }}>
                <IonIcon icon={item.icon}/> {item.title}
              </Typography>
            ))}
          </div>
          <Typography variant="h2" marginTop={2}>
            <IonIcon icon={bulb} style={{ marginRight: '10px' }}/> Recommendations
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="Recommend table">
              <TableHead>
                <TableRow>
                  <TableCell>Appliance(s)</TableCell>
                  <TableCell align="right">Your {props.current}</TableCell>
                  <TableCell align="right">{props.recommended}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.userValue}</TableCell>
                    <TableCell align="right">{row.recommendedValue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IndividualScore;
