import { View, Text, Image } from 'react-native';
import React from 'react';
import { style } from './Style';
import { AntDesign } from '@expo/vector-icons';
import { convertToDollars } from '../../helpers/tools';

const CartItem = ({ price, title, image }) => {
  let cost = convertToDollars(price);
  return (
    <View style={style.itemContainer}>
      <View style={style.item}>
        <Image
          style={style.image}
          source={{
            uri: image,
          }}
        />
        <View>
          <Text style={style.title}>{title}</Text>
          <Text style={style.price}>{cost}</Text>
        </View>
      </View>
      <View>
        <AntDesign name='delete' size={24} color='black' />
      </View>
    </View>
  );
};

export default CartItem;
