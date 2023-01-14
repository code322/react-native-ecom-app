import { View, Text, TextInput, Image } from 'react-native';
import React from 'react';
import { style } from './Style';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ setSearch, search }) => {
  return (
    <View style={style.container}>
      <View style={style.searchIcon}>
        <AntDesign name='search1' size={34} color='gray' />
      </View>
      <TextInput
        onChangeText={(prop) => setSearch(prop)}
        style={style.searchInput}
        placeholder='Search'
        value={search}
      />
    </View>
  );
};

export default SearchBar;
