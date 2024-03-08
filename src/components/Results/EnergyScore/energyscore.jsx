import React from 'react';
import { Typography, Box, Card, CardContent, Button } from '@mui/material';
import ViewEditButton from './vieweditbutton';
import ScoreRing from './scorering';
  

const EnergyScore = ({score, scoreLabel, co2Emission}) => {
    return (
        <Card>
            <CardContent>
                <Box display="flex" flexDirection="column" alignItems="flex-start">
                    <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                        Results
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        Your Home's <span style={{ color: 'teal' }}>Clean Energy</span> Score:
                    </Typography>
                    <ScoreRing score={score} scoreLabel={scoreLabel}/>
                    <Box display="flex" justifyContent="space-between">
                        <Box>
                            <Button>How We Calculate This</Button>
                            <Button>See How You Compare!</Button>
                            <ViewEditButton />
                        </Box>
                        <Box bgcolor="white" p={6} boxShadow={3}>
                            <Typography color="text.secondary" mb={2}>
                                <span style={{ color: 'teal', fontSize: '20' }}>{co2Emission}</span> 
                                <br/>
                                of CO2 per year
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default EnergyScore;