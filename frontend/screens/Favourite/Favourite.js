import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import FavouriteItem from '../../components/Item/Item';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Container from '../../components/Container/Container';
import { style } from './Style';

const Favourites = () => {
  const { favourites } = useSelector((state) => state.favouriteSlice);

  const renderFavourte = ({ item }) => (
    <FavouriteItem
      title={item.title}
      price={item.price}
      image={item.images[0]}
      id={item._id}
      screen='favourite'
    />
  );

  //remove the margin bottom bug from the bottom tab for ios

  let insets = useSafeAreaInsets();
  let bottomTab;
  if (Platform.OS === 'android') {
    bottomTab = useBottomTabBarHeight();
  } else {
    bottomTab = -insets.bottom;
  }

  if (favourites.length < 1) {
    return (
      <View style={style.noFavouritesContainer}>
        <Text>No favourites yet!</Text>
      </View>
    );
  }
  return (
    <Container>
      <Text style={style.header}>Favourites</Text>
      <View style={[style.container, { marginBottom: bottomTab }]}>
        <FlatList
          data={favourites}
          renderItem={renderFavourte}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
        />
      </View>
    </Container>
  );
};

export default Favourites;
