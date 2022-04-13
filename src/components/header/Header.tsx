/* eslint-disable react/jsx-props-no-spreading */

import './Header.css';

import React, { FC } from 'react';

import { Tab, TabList, Tabs } from '@chakra-ui/react';

const Header: FC = () => {
  console.log('HEADER');

  const onChangeTabs = (index: number) => {
    console.log('Tabs', index);
  };

  return (
    <Tabs my="1rem" onChange={onChangeTabs} align="end" variant="soft-rounded">
      <TabList>
        <Tab>Peoples</Tab>
        <Tab>Star ships</Tab>
        <Tab>Planets</Tab>
      </TabList>
    </Tabs>
  );
};

export default Header;
