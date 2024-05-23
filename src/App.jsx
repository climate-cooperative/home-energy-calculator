import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { FormDataProvider } from './context/FormDataContext';
import MainRoutes from './routes/routes';
import theme from './context/theme';
import { Provider } from 'react-redux';
import {store , persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <MainRoutes />
        </Router>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};



export default App;
