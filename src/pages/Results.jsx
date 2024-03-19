import React, { useContext } from "react";
import { Grid } from '@mui/material';
import { EnergyScore, Save, IndividualScore } from "../components/Results"; 
import { hammer, thermometer, water, home, bulb } from 'ionicons/icons';
import { FormDataContext } from '../context/FormDataContext';
import '../styles/page.css';

const Results = (props) => {
    const { formData } = useContext(FormDataContext);

    const scores = [
        { title: 'Heating & Cooling', icon: thermometer, current: formData.heatingCooling, grade: 'A' },
        { title: 'Water Heaters', icon: water, current: formData.waterHeating, grade: 'C' },
        { title: 'Appliances', icon: hammer, current: formData.appliances, grade: 'B' },
        { title: 'Sealing & Insulation', icon: home, current: formData.sealingInsulation, grade: 'A' },
        { title: 'Lighting', icon: bulb, current: formData.lighting, grade: 'B'}
    ]

    const co2Emission = '3,581 lbs';

    return (
        <div className="results">
            <Grid container spacing={4} sx={{ maxWidth: 1600, margin: '0 auto' }}>
                <Grid item xs={12} md={4.5}>
                    <EnergyScore co2Emission={co2Emission} />
                </Grid>
                <Grid item xs={12} md={7.5}>
                    <Grid container spacing={2}>
                        {scores.map((score, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <IndividualScore title={score.title} icon={score.icon} current={score.current} grade={score.grade}/>
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
}

export default Results;