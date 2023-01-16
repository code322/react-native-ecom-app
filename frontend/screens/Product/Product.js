import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../state/productSlice';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import { style } from './Style';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { addToCart } from '../../state/cartSlice';
const Product = ({ route, navigation }) => {
  const { id } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  const { product } = useSelector((state) => state.productSlice);

  let price =
    '$' + product?.price?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  return (
    <View style={style.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={style.backIconContainer}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name='arrow-back-outline' size={24} color={colors.black} />
      </TouchableOpacity>
      <View>
        <ImageCarousel image={product.images} />
      </View>
      <View style={style.product}>
        <View>
          <Text style={style.title}>{product?.title}</Text>
          <Text style={style.price}>{price}</Text>
          <Text style={style.description}>{product?.description}</Text>
        </View>
        <View style={style.buttonsContainer}>
          <TouchableOpacity activeOpacity={0.8} style={style.favIconContainer}>
            <Fontisto name='favorite' size={30} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => dispatch(addToCart(product))}
            activeOpacity={0.8}
            style={style.addToCart}
          >
            <Text style={style.addCartTitle}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Product;
