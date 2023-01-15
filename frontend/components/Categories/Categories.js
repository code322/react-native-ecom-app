import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './Style';
import { colors } from '../../theme/colors';

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
            backgroundColor:
              selectedCategory === title ? colors.black : colors.lightGray,
          },
        ]}
      >
        <Icon
          width={40}
          height={40}
          fill={selectedCategory === title ? colors.lightGray : colors.gray}
        />
      </View>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Categories;
