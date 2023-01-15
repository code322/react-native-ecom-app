import { View, Text, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import Container from '../../components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../state/productSlice';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';

const Product = ({ route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  const { product } = useSelector((state) => state.productSlice);
  console.log(product);

  return (
    <>
      <ScrollView>
        <ImageCarousel image={product.images} />
      </ScrollView>
    </>
  );
};

export default Product;
