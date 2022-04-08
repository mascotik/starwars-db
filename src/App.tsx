import './App.css';

import React, { FC } from 'react';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Main } from './pages';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const App: FC = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Main />
  </ThemeProvider>
);

export default App;
