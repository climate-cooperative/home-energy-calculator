import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { FormDataProvider } from './context/FormDataContext';
import MainRoutes from './routes/routes';
import theme from './context/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <FormDataProvider>
        <Router>
          <MainRoutes />
        </Router>
      </FormDataProvider>
    </ThemeProvider>
  );
}

export default App;