/* eslint-disable import/extensions */

import './App.css';

import React, { FC } from 'react';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import theme from './Theme';
import { Main } from './pages';

const App: FC = () => (
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  </>
);

export default App;
