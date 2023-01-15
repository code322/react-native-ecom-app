import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import Container from '../../components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../state/productSlice';

const Product = ({ route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  const { product } = useSelector((state) => state.productSlice);

  return (
    <Container>
      <Text>{`${product.title} `}</Text>
    </Container>
  );
};

export default Product;
