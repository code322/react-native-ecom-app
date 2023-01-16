import { View, Text, Image } from 'react-native';
import React from 'react';
import { style } from './Style';
import { AntDesign } from '@expo/vector-icons';
import { convertToDollars } from '../../helpers/tools';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { removeItem } from '../../state/cartSlice';
import { useDispatch } from 'react-redux';

const Item = ({ price, title, image, id }) => {
  const dispatch = useDispatch();
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
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => dispatch(removeItem(id))}
      >
        <AntDesign name='delete' size={24} color='black' />
      </TouchableOpacity>
    </View>
  );
};

export default Item;
