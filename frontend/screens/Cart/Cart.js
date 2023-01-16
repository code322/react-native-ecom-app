import { View, Text, TouchableOpacity, FlatList, Platform } from 'react-native';
import React from 'react';
import { style } from './Style';
import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import { Ionicons } from '@expo/vector-icons';
import CartItem from '../../components/Item/Item';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Cart = ({ navigation }) => {
  const { cart } = useSelector((state) => state.cartSlice);

  const renderCart = ({ item }) => (
    <CartItem
      title={item.title}
      price={item.price}
      image={item.images[0]}
      id={item._id}
      screen='cart'
    />
  );

  let insets = useSafeAreaInsets();
  let bottomTab;
  if (Platform.OS === 'android') {
    bottomTab = useBottomTabBarHeight();
  } else {
    bottomTab = insets.bottom;
    bottomTab = 0;
  }
  if (cart.length < 1) {
    return (
      <View style={style.emptyCartContainer}>
        <Ionicons name='ios-cart-outline' size={104} color='black' />
        <Text style={style.emptyCartTitle}>Your cart is empty</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={style.shopNow}
          onPress={() =>
            navigation.navigate('ProductsTab', { screen: 'Products' })
          }
        >
          <Text style={style.shopNowTitle}>Shop Now!</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <Container>
      <Text style={style.header}>Cart</Text>
      <View style={[style.container]}>
        <FlatList
          data={cart}
          renderItem={renderCart}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
        />
      </View>
    </Container>
  );
};

export default Cart;
