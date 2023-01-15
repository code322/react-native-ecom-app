import { View, Text, Image, FlatList, Platform } from 'react-native';
import React from 'react';
import { style } from './Style';
import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../theme/colors';
import CartItem from '../../components/CartItem/CartItem';
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
    />
  );

  let insets = useSafeAreaInsets();
  let bottomTab;
  if (Platform.OS === 'android') {
    bottomTab = useBottomTabBarHeight();
  } else {
    bottomTab = insets.bottom;
  }

  return (
    <Container>
      <Text style={style.header}>Cart</Text>
      <View style={[style.container, { marginBottom: bottomTab }]}>
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
