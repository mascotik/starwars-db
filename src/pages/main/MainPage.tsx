import React, { FC } from 'react';

import { Container } from '@chakra-ui/react';

import {
  Header,
  RandomPlanet
} from '../../components';
import { PeopleContainer } from '../../containers';

const MainPage: FC = () => (
  <Container maxW="container.md">
    <Header />
    <RandomPlanet />
    <PeopleContainer />
  </Container>
);

export default MainPage;
