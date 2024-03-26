import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const BackButton = ({ pageName, route }) => {
  const navigate = useNavigate();

  const goto = () => {
    navigate(route);
  };

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      textAlign="left"
      width="100%"
    >
      <IconButton
        onClick={goto}
        style={{ color: 'inherit', width: '100px', height: '50px', margin: 50 }}
      >
        <ArrowBackIosIcon style={{ fontSize: '2rem' }} />
        <Typography variant="h6">{pageName}</Typography>
      </IconButton>
    </Box>
  );
};

export default BackButton;
