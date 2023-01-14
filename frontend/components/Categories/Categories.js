import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './Style';

const Categories = ({ ...props }) => {
  const { title, Icon, setSelectedCategory, selectedCategory } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={style.container}
      onPress={() => setSelectedCategory(title)}
    >
      <View
        style={[
          style.iconContainer,
          {
            backgroundColor: selectedCategory === title ? '#000' : '#F5F5F5',
          },
        ]}
      >
        <Icon
          width={40}
          height={40}
          fill={selectedCategory === title ? '#F5F5F5' : '#909090'}
        />
      </View>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Categories;
