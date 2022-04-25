import React, { FC } from 'react';
import { PeopleContainer } from '..';
import { RandomPlanet } from '../../components';

const BodyContainer: FC = () => (
  <div className="section page_center">
    <RandomPlanet />
    <PeopleContainer />
  </div>
);

export default BodyContainer;
