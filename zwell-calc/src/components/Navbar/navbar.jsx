import React from 'react';
import './navbar.css';
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Villa, MyLocation, House, Window, Roofing, LocalFireDepartment, AcUnit, WaterDrop, Lightbulb, Kitchen, Bolt, CheckCircle } from '@mui/icons-material';

const Navbar = ({ index }) => {
  const steps = [
    { icon: <Villa />, text: 'Home Type' },
    { icon: <MyLocation />, text: 'Location' },
    { icon: <House />, text: 'Home Size' },
    { icon: <Window />, text: 'Windows' },
    { icon: <Roofing />, text: 'Insulation' },
    { icon: <LocalFireDepartment />, text: 'Heating' },
    { icon: <AcUnit />, text: 'Cooling' },
    { icon: <WaterDrop />, text: 'Water' },
    { icon: <Lightbulb />, text: 'Lighting' },
    { icon: <Kitchen />, text: 'Appliances' },
    { icon: <Bolt />, text: 'Energy' },
    { icon: <CheckCircle />, text: 'Results' },
  ];

  return (
    <div className="navbar">
      <div style={{ height: '50px' }} />
        <Grid justify="center" alignItems="center">
          <Grid item xs={4}>
              <List component="nav">
              {steps.map((step, i) => (
                <ListItem key={i} className={i === index ? 'active' : ''}>
                <ListItemIcon className={`icon-circle ${i === index ? 'active' : ''} ${i === steps.length - 1 ? 'last-icon' : ''} ${i < index ? 'completed' : ''}`}>
                  {step.icon}
                </ListItemIcon>
                <ListItemText
                  className="list-item-text"
                  primary={step.text}
                  primaryTypographyProps={{
                    style: {
                      color: i === index ? 'black' : 'lightgray',
                      fontWeight: i === index ? 'bold' : 'normal',
                    },
                  }}
                />
                </ListItem>
              ))}
              </List>
          </Grid>
        </Grid>
    </div>
  );
};

export default Navbar;