import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // white
    },
    secondary: {
      main: '#008080', // teal
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 'calc(0.5rem + 0.5vw)', // Responsive font size
          padding: '10px 20px',
          width: '150px', // Set a fixed width
          height: '40px', // Set a fixed height
          overflow: 'hidden',
          margin: '10px',
          font: 'inherit',
          textTransform: 'none', // Add this line
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#008080', // teal
          },
        },
        // Define a new style
        imageButton: {
          fontSize: 'calc(0.5rem + 0.5vw)',
          width: '150px', // Increased width
          height: '150px', // Increased height
          // stack content on top of each other
          flexDirection: 'column',
          justifyContent: 'center',
        },
      },
      defaultProps: {
        variant: 'contained',
      },
    },
  },
});

export default theme;