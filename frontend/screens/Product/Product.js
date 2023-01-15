import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import Container from '../../components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../state/productSlice';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import { style } from './Style';

const Product = ({ route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  const { product } = useSelector((state) => state.productSlice);
  console.log(product);

  let price =
    '$' + product?.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  return (
    <>
      <View>
        <ImageCarousel image={product.images} />
      </View>
      <View style={style.container}>
        <View>
          <Text style={style.title}>{product?.title}</Text>
          <Text style={style.price}>{price}</Text>
          <Text style={style.description}>{product?.description}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Product;
