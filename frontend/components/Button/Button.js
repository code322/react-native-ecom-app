import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './Style';
import { colors } from '../../theme/colors';

const Button = ({ title, bgColor, txColor }) => {
  return (
    <View
      style={[
        style.button,
        {
          backgroundColor: `${bgColor}`,
        },
      ]}
    >
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={[style.title, { color: `${txColor}` }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
