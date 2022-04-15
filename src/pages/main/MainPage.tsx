import './MainPage.scss';

import React, { FC } from 'react';

import {
  Header,
  RandomPlanet
} from '../../components';
import { PeopleContainer } from '../../containers';

const MainPage: FC = () => (
  <div className="page_container">
    <Header />
    <div className="section page_center">
      <RandomPlanet />
      <PeopleContainer />
    </div>
  </div>
);

export default MainPage;
