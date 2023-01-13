import { View, Text } from 'react-native';
import React from 'react';
import { style } from './Style';

const Categories = ({ title, Icon }) => {
  return (
    <View style={[style.container]}>
      <View style={[style.iconContainer, { backgroundColor: '#444' }]}>
        <Icon width={40} height={40} fill={'#909090'} />
      </View>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default Categories;
