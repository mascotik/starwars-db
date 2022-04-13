import React, { FC } from 'react';

import { Box, List, ListItem } from '@chakra-ui/react';

const ItemList : FC = () => {
  console.log('Itemlist');
  return (
    <Box bg="gray.900" w={{ sm: '100%', md: '50%' }} px="1rem" my="1rem">
      <List>
        <ListItem>11111111111111</ListItem>
        <ListItem>22222222222222</ListItem>
      </List>
    </Box>
  );
};

export default ItemList;
