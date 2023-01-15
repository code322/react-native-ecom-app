import { View, Text, Image } from 'react-native';
import React from 'react';
import { style } from './Style';
import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../theme/colors';
import CartItem from '../../components/CartItem/CartItem';

const item = {
  title: 'coffee table',
  price: 12,
  image:
    'https://www.jysk.ca/media/catalog/product/u/d/udsbjerg-chair-grey.jpg?quality=80&fit=bounds&height=&width=&canvas=://',
};

const Cart = ({ navigation }) => {
  const state = useSelector((state) => state.cartSlice);

  return (
    <Container>
      <TouchableOpacity
        activeOpacity={0.8}
        style={style.backIconContainer}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name='arrow-back-outline' size={24} color={colors.black} />
      </TouchableOpacity>
      <Text style={style.header}>Cart</Text>
      <View>
        {/* //Container */}

        <CartItem title={item.title} price={item.price} image={item.image} />
        <CartItem title={item.title} price={item.price} image={item.image} />
        <CartItem title={item.title} price={item.price} image={item.image} />
      </View>
    </Container>
  );
};

export default Cart;
