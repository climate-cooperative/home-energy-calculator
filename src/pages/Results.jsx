import React, { useState, useEffect, useContext } from 'react';
import { Grid } from '@mui/material';
import { EnergyScore, Save, IndividualScore } from '../components/Results';
import { FormDataContext } from '../context/FormDataContext';
import handleCalculation from '../helpers/calculation.js';
import '../styles/page.css';
import Header from '../components/Results/Header';

const Results = (props) => {
  const { formData } = useContext(FormDataContext);
  const [ co2Emission, setCo2Emission ] = useState(0);
  const [ scores, setScores ] = useState(null);
  const [ avgHomeState, setAvgHomeState ] = useState(0);

  useEffect(() => {
    const calculate = async () => {
      const {co2_total, grades, avgHome} = await handleCalculation(formData);
      console.log(co2_total, grades, avgHome);
      setCo2Emission(co2_total);
      setScores(grades);
      setAvgHomeState(avgHome);
    };
  
    calculate();
  }, [formData]);

  if (scores === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="results">
      <Header />
      <Grid container spacing={4}>
        <Grid item xs={12} md={4.5}>
          <EnergyScore 
            yourHomeValue={co2Emission}
            avgHomeState={16000}
            avgHomeUS={avgHomeState}
          />
        </Grid>
        <Grid item xs={12} md={7.5}>
          <Grid container spacing={2}>
            {scores && scores.map((score, index) => (
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
