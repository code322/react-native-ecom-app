import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './Style';

const ListProducts = ({ images, title, price }) => {
  return (
    <>
      <TouchableOpacity style={style.imageContainer}>
        <Image
          style={style.image}
          source={{
            uri: `${images[0]}`,
          }}
        />
        <Text>{title}</Text>
        <Text>{price}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ListProducts;
