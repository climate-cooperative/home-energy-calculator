import React, { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline, mailOpen, mail } from 'ionicons/icons';

const SaveResultsBox = ({handleSave}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    handleSave();
  }

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardContent style={{ minHeight: '200px' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">  
              <IonIcon icon={
                clicked ? mailOpen : mail
              } size='large' style={{ margin: '10px' }} />
              <Typography variant="h4" component="div" style={{ fontWeight: 'bold' }}>
                {clicked ? 'Results Saved!' : 'Save Your Results'}
              </Typography>
            </Box>
            <IonIcon icon={chevronForwardOutline} size='large' />
          </Box>
          <hr style={{ height: '3px', border: 'none', backgroundColor: 'lightgray' }} />
          <Typography variant="h5" component="div" fontWeight={'Bold'}>
            {clicked ? 'Your results have been saved' : 'Save your results to compare with future surveys'}
          </Typography>
          <Typography variant="h5" component="div">
            {clicked ? 'You can now view your saved results in your downloads' : 'We will save your results for you to view later'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SaveResultsBox;
