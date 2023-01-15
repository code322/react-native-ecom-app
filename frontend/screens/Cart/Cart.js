import { View, Text } from 'react-native';
import React from 'react';
import { style } from './Style';
import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../theme/colors';

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
    </Container>
  );
};

export default Cart;
