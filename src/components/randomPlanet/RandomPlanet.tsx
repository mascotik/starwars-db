import './RandomPlanet.css';

import React, { useEffect, useState } from 'react';

import {
  Box,
  Flex,
  Image,
  List,
  ListItem,
  Text
} from '@chakra-ui/react';

import Planet from '../../models/Planet';
import ApiService from '../../services/apiService/ApiService';

export const RandomPlanet: React.FC = () => {
  const api = new ApiService();
  const [planet, setPlanet] = useState(new Planet(undefined));

  const getPlanet = () => {
    api.getPlanet(3)
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
      <List>
        <ListItem display="flex">
          <Text fontSize="md" w="5rem">Planet:</Text>
          <Text color="blue.100">{item.name}</Text>
        </ListItem>
        <ListItem display="flex">
          <Text fontSize="md" w="5rem">Diameter:</Text>
          <Text color="blue.100">{item.diameter}</Text>
        </ListItem>
        <ListItem display="flex">
          <Text fontSize="md" w="5rem">Climate:</Text>
          <Text color="blue.100">{item.climate}</Text>
        </ListItem>
      </List>
    );
  };

  return (
    <Flex w="100%" bg="gray.900">
      <Box m="0.5rem">
        <Image h="150" src={planet.imageUrl} alt={planet.name} />
      </Box>
      <Flex m="0.5rem">
        {renderListItems(planet)}
      </Flex>
    </Flex>
  );
};

export default RandomPlanet;
