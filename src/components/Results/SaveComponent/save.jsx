import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SaveButton from './savebutton';

const SaveResultsBox = () => {
    return (
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            paddingX: '50px', 
            paddingY: '20px',
            border: '1px solid',
            borderColor: 'divider' }}>
            <Grid item xs={8} >
                <Typography variant="h6">Save Your Results!</Typography>
                <Typography>We'll send you an email with a link to return back to your results page anytime.</Typography>
            </Grid>
            <Grid item xs={4}>
                <SaveButton />
            </Grid>
        </Box>
    );
};

export default SaveResultsBox;