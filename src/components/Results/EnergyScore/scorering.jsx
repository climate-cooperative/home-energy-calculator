import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';

const ScoreRing = ({ score, scoreLabel }) => {
    const radius = 50;
    const stroke = 4;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <Card style={{ 
            backgroundColor: 'lightgray', 
            borderRadius: '20%',
        }}>
            <CardContent>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                    <svg
                        height={radius * 2}
                        width={radius * 2}
                    >
                        <circle
                            stroke="teal"
                            fill="transparent"
                            strokeWidth={stroke}
                            strokeDasharray={circumference + ' ' + circumference}
                            style={{ strokeDashoffset }}
                            r={normalizedRadius}
                            cx={radius}
                            cy={radius}
                        />
                        <text x="60%" y="40%" textAnchor="middle" stroke="black" strokeWidth="1px" dy=".3em">{score}%</text>
                        <text x="60%" y="40%" textAnchor="middle" stroke="black" strokeWidth="1px" dy="2em">{scoreLabel}</text>
                    </svg>
                    <Box display="flex" flexDirection="column" alignItems="flex-start">
                        <Typography color="text.secondary" style={{marginLeft: '20px'}}>
                            Score is based on the estimated CO2 emissions of your home
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ScoreRing;