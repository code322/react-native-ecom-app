import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './Style';

const Categories = ({ title, Icon, id, setSelectedItem, selectedItem }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={style.container}
      onPress={() => setSelectedItem(id)}
    >
      <View
        style={[
          style.iconContainer,
          { backgroundColor: selectedItem === id ? '#000' : '#fff' },
        ]}
      >
        <Icon
          width={40}
          height={40}
          fill={selectedItem === id ? '#fff' : '#909090'}
        />
      </View>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Categories;
