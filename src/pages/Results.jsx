import React, { useContext } from "react";
import { Grid, Box } from '@mui/material';
import { EnergyScore, Save, IndividualScore } from "../components/Results"; 
import { FormDataContext } from '../context/FormDataContext';

const Results = (props) => {
    const { formData } = useContext(FormDataContext);
    const scores = [
        { title: 'Heating & Cooling', icon: null, current: formData.heatingCooling, grade: 'A' },
        { title: 'Water Heaters', icon: null, current: formData.waterHeating, grade: 'C' },
        { title: 'Appliances', icon: null, current: formData.appliances, grade: 'B' },
        { title: 'Sealing & Insulation', icon: null, current: formData.sealingInsulation, grade: 'A' },
        { title: 'Lighting', icon: null, current: formData.lighting, grade: 'B'}
    ]

    const score = 70;
    const scoreLabel = 'Good';
    const co2Emission = '3,581 lbs';

    return (
        <Grid container spacing={4} sx={{ maxWidth: 1300, margin: '0 auto' }}>
            <Grid item xs={12} md={4.5}>
                <EnergyScore score={score} scoreLabel={scoreLabel} co2Emission={co2Emission} />
            </Grid>
            <Grid item xs={12} md={7.5}>
                <Grid container spacing={2}>
                    {scores.map((score, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <IndividualScore title={score.title} icon={score.icon} current={score.current} grade={score.grade}/>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ marginTop: 5 }}>
                    <Save />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Results;