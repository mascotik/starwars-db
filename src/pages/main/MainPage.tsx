import React, { FC } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import {
  Header,
  RandomPlanet
} from '../../components';
import { PeopleContainer } from '../../containers';

const MainPage: FC = () => (
  <ChakraProvider>
    <Header />
    <RandomPlanet />
    <PeopleContainer />
  </ChakraProvider>
);

export default MainPage;
