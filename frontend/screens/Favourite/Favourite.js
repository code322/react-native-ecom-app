import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import FavouriteItem from '../../components/Item/Item';

const Favourites = () => {
  const { cart } = useSelector((state) => state.cartSlice);

  return (
    <View>
      <Text>Favourites</Text>
    </View>
  );
};

export default Favourites;
