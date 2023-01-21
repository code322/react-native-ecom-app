import { View, Text, TouchableOpacity, FlatList, Platform } from 'react-native';
import React from 'react';
import { style } from './Style';
import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import { Ionicons } from '@expo/vector-icons';
import CartItem from '../../components/Item/Item';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Cart = ({ navigation }) => {
  const { cart } = useSelector((state) => state.cartSlice);

  const renderCart = ({ item }) => (
    <CartItem
      title={item.title}
      price={item.price}
      image={item.images[0]}
      id={item._id}
      quantity={item.quantity}
      screen='cart'
    />
  );

  //remove the margin bottom bug from the bottom tab for ios
  let insets = useSafeAreaInsets();
  let bottomTab;
  if (Platform.OS === 'android') {
    bottomTab = 0;
  } else {
    bottomTab = insets.bottom;
  }
  if (cart.length < 1) {
    return (
      <View style={style.emptyCartContainer}>
        <Ionicons name='ios-cart-outline' size={104} color='black' />
        <Text style={style.emptyCartTitle}>Your cart is empty!</Text>
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
      <View style={[style.container, { marginBottom: -bottomTab }]}>
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
