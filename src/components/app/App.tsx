import React, { FC } from 'react';
import Header from '../header';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';

import RandomPlanet from '../randomPlanet';
import './App.css';

const App: FC = () => (
  <>
    <Header />
    <RandomPlanet />
    <div>
      <ItemList />
    </div>
    <div>
      <PersonDetails />
    </div>
  </>
);

export default App;
