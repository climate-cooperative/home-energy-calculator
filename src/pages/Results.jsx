import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { EnergyScore, Save, IndividualScore } from '../components/Results';
import { hammer, thermometer, water, home, bulb, checkmark, alert, close } from 'ionicons/icons';
import { FormDataContext } from '../context/FormDataContext';
import '../styles/page.css';
import Header from '../components/Results/Header';

const Results = (props) => {
  const { formData } = useContext(FormDataContext);


  const scores = [
    { 
      title: 'Heating & Cooling', 
      icon: thermometer, 
      current: formData.heatingCooling, 
      grade: 'A+',
      recommended: 'Heat Pump with Ductless Mini-Splits',
      content: [
        { title: 'Unit Efficiency', icon: checkmark},
        { title: 'Local Climate', icon: checkmark},
        { title: 'Fuel Source', icon: checkmark},
        { title: 'Local Grid', icon: checkmark},
      ],
      rows: [
        { name: 'Function(s)', userValue: 'Heating', recommendedValue: 'Heating & Cooling'},
        { name: 'Annual Energy Cost', userValue: '$0', recommendedValue: '$232'},
        { name: 'Tons of CO2 per Year', userValue: '0.00', recommendedValue: '0.29'},
        { name: 'Clean Energy Score', userValue: 'A+', recommendedValue: 'A+'},
        { name: 'Home Value Added', userValue: '-', recommendedValue: '$18.4k'},
        { name: 'Rebates & Incentives', userValue: '-', recommendedValue: (<a href="https://homes.rewiringamerica.org/calculator">Check it out!</a>)},
      ]
    },
    { 
      title: 'Water Heaters', 
      icon: water, 
      current: formData.waterHeating, 
      grade: 'F',
      recommended: 'Hybrid Heat Pump Water Heater',
      content: [
        { title: 'Unit Efficiency', icon: close},
        { title: 'Ground Water Temp.', icon: close},
        { title: 'Fuel Source', icon: close},
        { title: 'Local Grid', icon: checkmark},
      ],
      rows: [
        { name: 'Annual Energy Cost', userValue: '$0', recommendedValue: '$32'},
        { name: 'Tons of CO2 per Year', userValue: '0.00', recommendedValue: '0.04'},
        { name: 'Clean Energy Score', userValue: 'F', recommendedValue: 'A-'},
        { name: 'Rebates & Incentives', userValue: '-', recommendedValue: (<a href="https://homes.rewiringamerica.org/calculator">Check it out!</a>)},
      ]
    },
    { 
      title: 'Appliances', 
      icon: hammer, 
      current: formData.appliances, 
      grade: 'B-', 
      recommended: 'Energy Star Appliances',
      content: [
        { title: 'High Efficiency Appliance', icon: alert},
        { title: 'Electric Appliances', icon: alert},
        { title: 'Local Grid', icon: checkmark},
      ],
      rows:[]
    },
    { 
      title: 'Sealing & Insulation', 
      icon: home, 
      current: 'Annual Cost Savings', 
      grade: 'A+',
      recommended: 'Annual CO2 Savings',
      content: [
        { title: 'Unit Efficiency', icon: checkmark},
        { title: 'Local Climate', icon: checkmark},
        { title: 'Fuel Source', icon: checkmark},
        { title: 'Local Grid', icon: checkmark},
      ],
      rows: [
        { name: 'Add Attic Insulation', userValue: 'Save $4', recommendedValue: 'Down 100 lbs'},
        { name: 'Add Crawl Space Insulation', userValue: 'Save $4', recommendedValue: 'Down 4 lbs'},
        { name: 'Seal Aur Leaks', userValue: 'Save $100', recommendedValue: 'Down 607 lbs'},
      ]
    },
    { 
      title: 'Lighting', 
      icon: bulb, 
      current: formData.lighting, 
      grade: 'A+',
      recommended: 'All LED Bulbs',
      content: [
        { title: 'Unit Efficiency', icon: checkmark},
        { title: 'Local Climate', icon: checkmark},
        { title: 'Fuel Source', icon: checkmark},
        { title: 'Local Grid', icon: checkmark},
      ],
      rows: [
        { name: 'Annual Energy Cost', userValue: '$0', recommendedValue: '$13'},
        { name: 'Tons of CO2 per Year', userValue: '0.00', recommendedValue: '0.02'},
        { name: 'Clean Energy Score', userValue: 'A+', recommendedValue: 'A+'},
        { name: 'Rebates & Incentives', userValue: '-', recommendedValue: (<a href="https://homes.rewiringamerica.org/calculator">Check it out!</a>)},
      ]
    }
  ];

  const co2Emission = '3,581 lbs';

  return (
    <div className="results">
      <Header />
      <Grid container spacing={4}>
        <Grid item xs={12} md={4.5}>
          <EnergyScore co2Emission={co2Emission} />
        </Grid>
        <Grid item xs={12} md={7.5}>
          <Grid container spacing={2}>
            {scores.map((score, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <IndividualScore
                  title={score.title}
                  icon={score.icon}
                  grade={score.grade}
                  content={score.content}
                  rows={score.rows}
                  current={score.current}
                  recommended={score.recommended}
                />
              </Grid>
            ))}
            <Grid item xs={12} sm={6}>
              <Save />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Results;
