import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './Style';

const Button = ({ title, bgColor, txColor, handlePress }) => {
  return (
    <View
      style={[
        style.button,
        {
          backgroundColor: `${bgColor}`,
        },
      ]}
    >
      <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
        <Text style={[style.title, { color: `${txColor}` }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
