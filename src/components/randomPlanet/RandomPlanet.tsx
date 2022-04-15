import './RandomPlanet.scss';

import React, { useEffect, useState } from 'react';

import Planet from '../../models/Planet';
import ApiService from '../../services/apiService/ApiService';

export const RandomPlanet: React.FC = () => {
  const api = new ApiService();
  const [planet, setPlanet] = useState(new Planet(undefined));

  const getPlanet = () => {
    api.getPlanet(2)
      .then((res) => {
        setPlanet(res);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getPlanet();
  }, []);

  const renderListItems = (item: Planet) => {
    console.log('item');

    // const i = 0;
    return (
      <div>
        list
        {' '}
        {item.name}
      </div>
    );
  };

  return (
    <section className="random_caonatier">
      <figure>
        Random
        {' '}
        {planet.name}
        {renderListItems(planet)}
      </figure>
    </section>

  );
};

export default RandomPlanet;
