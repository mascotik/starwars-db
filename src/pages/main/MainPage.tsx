import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Paper } from '@mui/material';
import {
  Header, ItemList, PersonDetails, RandomPlanet
} from '../../components';

const MainPage: FC = () => (
  <>
    <Header />
    <RandomPlanet />
    <Container maxWidth="md" className="Container">

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className="Paper">
            <ItemList />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="Paper">
            <PersonDetails />
          </Paper>
        </Grid>
      </Grid>

    </Container>

  </>
);

export default MainPage;
