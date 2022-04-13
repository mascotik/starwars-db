import React from 'react';

/* eslint-disable no-unreachable */
import { Flex } from '@chakra-ui/react';

import { ItemList, PersonDetails } from '../../components';

const PeopleContainer = () => (
  <Flex>
    <ItemList />
    <PersonDetails />
  </Flex>
);

export default PeopleContainer;
