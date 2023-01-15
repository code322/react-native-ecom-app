import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './Style';

const ListProducts = ({ images, title, price }) => {
  let cost = '$' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  return (
    <>
      <TouchableOpacity activeOpacity={0.8} style={style.imageContainer}>
        <Image
          style={style.image}
          source={{
            uri: `${images[0]}`,
          }}
        />
        <Text>{title}</Text>
        <Text>{cost}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ListProducts;
