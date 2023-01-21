import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './Style';
import { colors } from '../../theme/colors';

const Button = ({ title, bgColor, txColor, handlePress, disableButton }) => {
  console.log(disableButton);
  return (
    <View
      style={[
        style.button,
        {
          backgroundColor: disableButton ? colors.gray : `${bgColor}`,
          borderColor: disableButton ? colors.gray : colors.black,
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handlePress}
        disabled={disableButton}
      >
        <Text style={[style.title, { color: `${txColor}` }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
