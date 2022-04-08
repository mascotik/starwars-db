/* eslint-disable react/jsx-props-no-spreading */
import {
  Container, Tabs, Tab
} from '@mui/material';
import React, { FC, useState } from 'react';
import './Header.css';

const Header: FC = () => {
  const [idxPanel, setIdxPanel] = useState('peoples');

  const handleChangeTab = (e: React.SyntheticEvent, value: string) => {
    setIdxPanel(value);
  };

  const a11yProps = (index: string) => ({
    value: index,
    label: index,
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  });

  console.log(idxPanel);

  return (
    <Container maxWidth="md">
      <Tabs
        value={idxPanel}
        onChange={handleChangeTab}
        aria-label="aria label"
        className="Tabs"
      >
        <Tab {...a11yProps('peoples')} />
        <Tab {...a11yProps('starships')} />
        <Tab {...a11yProps('planets')} />
      </Tabs>
    </Container>
  );
};

export default Header;
