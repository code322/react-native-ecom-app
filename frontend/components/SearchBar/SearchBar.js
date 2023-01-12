import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { style } from './Style';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={style.container}>
      <View style={style.searchIcon}>
        <AntDesign name='search1' size={34} color='gray' />
      </View>
      <TextInput style={style.searchInput} placeholder='Search' />
    </View>
  );
};

export default SearchBar;
