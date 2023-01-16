import { View, Text, TextInput, Image } from 'react-native';
import React from 'react';
import { style } from './Style';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

const SearchBar = ({ setKeyword, keyword }) => {
  return (
    <View style={style.container}>
      <View style={style.searchIcon}>
        <AntDesign name='search1' size={34} color={colors.gray} />
      </View>
      <TextInput
        onChangeText={(prop) => setKeyword(prop)}
        style={style.searchInput}
        placeholder='Search'
        value={keyword}
      />
    </View>
  );
};

export default SearchBar;
