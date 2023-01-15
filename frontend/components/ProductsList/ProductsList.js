import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './Style';
import { useNavigation } from '@react-navigation/native';

const ListProducts = ({ images, title, price, id }) => {
  let cost = '$' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.push('Product', { id })}
        activeOpacity={0.8}
        style={style.imageContainer}
      >
        <Image
          style={style.image}
          source={{
            uri: `${images[0]}`,
          }}
        />
        <Text style={style.title}>{title}</Text>
        <Text style={style.price}>{cost}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ListProducts;
