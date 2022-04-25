import './MainPage.scss';

import React, { FC } from 'react';

import { Header } from '../../components';
import { BodyContainer } from '../../containers';

const MainPage: FC = () => (
  <div className="page_container">
    <Header />
    <BodyContainer />
  </div>
);

export default MainPage;
