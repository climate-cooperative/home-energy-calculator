import React from 'react';
import { Typography, Box, Card, CardContent, Button, CircularProgress } from '@mui/material';

const EnergyScore = () => {
    // Define the score and details for the gauge
    const score = 82;
    const scoreLabel = 'Good';
    const co2Emission = '3,581 lbs of CO2 per year';

    return (
        <Card sx={{
            minHeight: 300,
            width: 400,
            padding: 2,
            textAlign: 'center',
            margin: 10,
        }}>
            <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h5" component="div">
                        Your Home's Clean Energy Score:
                    </Typography>
                    {/* horizontal break */}
                    <hr style={{width: '100%', margin: '20px 0', color: 'lightgray'}} />
                    <Box position="relative" display="inline-flex" my={4}>
                        <CircularProgress variant="determinate" value={score} size={120} thickness={4} color="secondary" sx={{zIndex: 1}} />
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                borderRadius: '50%',
                                bgcolor: 'pink',
                                padding: 1,
                              }}
                        >
                            <div>
                                <Typography variant="h5" component="div" color="text.primary">
                                    {score}
                                </Typography>
                                <Typography variant="h6" component="div" color="text.secondary">
                                    {scoreLabel}
                                </Typography>
                            </div>
                        </Box>
                    </Box>
                    <Typography color="text.secondary">
                        *Score is based on the estimated CO2 emissions of your home
                    </Typography>
                    <Typography color="text.secondary" mb={2}>
                        {co2Emission}
                    </Typography>
                    <Button>How We Calculate This</Button>
                    <Button>See How You Compare!</Button>
                    <hr style={{width: '100%', margin: '20px 0', color: 'lightgray'}} />
                    <Button>View/Edit Answers</Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default EnergyScore;