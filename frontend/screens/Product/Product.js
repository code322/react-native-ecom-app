import { View, Text } from 'react-native';
import React from 'react';
import Container from '../../components/Container/Container';

const Product = ({ route }) => {
  const { id } = route.params;

  return (
    <Container>
      <Text>{`Product ${id} `}</Text>
    </Container>
  );
};

export default Product;
