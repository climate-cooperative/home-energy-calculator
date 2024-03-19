import React from 'react';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline, mailOpen } from 'ionicons/icons';

const SaveResultsBox = () => {
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" alignItems="center">
                            <IonIcon icon={mailOpen} style={{ fontSize: '30px', margin: '10px' }} />
                            <Typography variant="h5" component="div" fontWeight={'bold'}>
                                Save your Results
                            </Typography>
                        </Box>
                        <IonIcon icon={chevronForwardOutline} style={{ fontSize: '30px'}}/>
                    </Box>
                    <hr style={{ color: 'lightgray' }} />
                    <Typography variant="body1" component="div" fontWeight={'Bold'}>
                        Save your results to compare with future surveys
                    </Typography>
                    <Typography variant="body2" component="div">
                        We'll send you an email with a link to return back to your results
                        page anytime. 
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default SaveResultsBox;