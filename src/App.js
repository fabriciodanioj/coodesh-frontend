import React from 'react';

import { ThemeProvider } from 'styled-components';

import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Routes from './routes/index';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

const history = createBrowserHistory();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
        <ToastContainer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
