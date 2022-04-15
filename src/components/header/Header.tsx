/* eslint-disable react/jsx-props-no-spreading */

import './Header.scss';

import React, { FC } from 'react';

const Header: FC = () => {
  console.log('HEADER');

  return (
    <div className="header">
      <button className="header_btn--peoples" type="button">Peoples</button>
      <button className="header_btn--starship" type="button">Starships</button>
      <button className="header_btn--planets" type="button">Planets</button>
    </div>
  );
};

export default Header;
