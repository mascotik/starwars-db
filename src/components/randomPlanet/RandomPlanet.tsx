import React from 'react';

import './RandomPlanet.css';
import { Container, Paper } from '@mui/material';

export const RandomPlanet: React.FC = () => {
  console.log('a');

  return (
    <Container maxWidth="md" className="Container">
      <Paper className="Paper">
        RANDOM
      </Paper>
    </Container>
  );
};

export default RandomPlanet;
