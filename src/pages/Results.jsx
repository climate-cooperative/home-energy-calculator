import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { EnergyScore, Save, IndividualScore } from '../components/Results';
import { FormDataContext } from '../context/FormDataContext';
import handleCalculation from '../helpers/calculation.js';
import '../styles/page.css';

const Results = (props) => {
  const { formData } = useContext(FormDataContext);
  const [ co2Emission, setCo2Emission ] = useState(0);
  const [ scores, setScores ] = useState(null);

  useEffect(() => {
    const {co2_total, grades} = handleCalculation(formData);
    setCo2Emission(co2_total);
    setScores(grades);
  }, [formData]);

  if (scores === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="results">
      <Grid container spacing={4} sx={{ maxWidth: 1600, margin: '0 auto' }}>
        <Grid item xs={12} md={4.5}>
          <EnergyScore co2Emission={co2Emission} />
        </Grid>
        <Grid item xs={12} md={7.5}>
          <Grid container spacing={2}>
            {scores && scores.map((score, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <IndividualScore
                  title={score.title}
                  icon={score.icon}
                  scores={score.scores}
                  grade={score.grade}
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
