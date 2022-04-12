import React, { FC } from 'react';
import {
  Header, RandomPlanet
} from '../../components';
import { PeopleContainer } from '../../containers';

const MainPage: FC = () => (
  <>
    <Header />
    <RandomPlanet />
    <PeopleContainer />

  </>
);

export default MainPage;
