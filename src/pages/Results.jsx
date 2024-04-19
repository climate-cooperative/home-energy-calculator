import React, { useState, useEffect, useContext } from 'react';
import { Grid } from '@mui/material';
import { EnergyScore, Save, IndividualScore } from '../components/Results';
import { FormDataContext } from '../context/FormDataContext';
import handleCalculation from '../helpers/calculation.js';
import '../styles/page.css';
import Header from '../components/Results/Header';

const Results = () => {
  const { formData } = useContext(FormDataContext);
  const [ data, setData ] = useState(null);

  useEffect(() => {
    const calculate = async () => {
      const calc_data = await handleCalculation(formData);
      setData(calc_data);
    };
  
    calculate();
  }, [formData]);

  if (data === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="results">
      <Header />
      <Grid container spacing={4} style={{ padding: '20px' }}>
        <Grid item xs={12} md={4.5}>
          <EnergyScore 
            yourHomeValue={data.co2_total}
            avgHomeState={data.avgHome}
            avgHomeUS={16000}
            details={data.details}
          />
        </Grid>
        <Grid item xs={12} md={7.5}>
          <Grid container spacing={2}>
            {data.grades && data.grades.map((score, index) => (
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