import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './Style';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

const InputField = ({ label, placeholder, type, style, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, style]}
          placeholder={placeholder}
          textContentType={type}
          secureTextEntry={!showPassword}
          {...props}
        />
        {type === 'password' && (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.iconContainer}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              style={styles.icon}
              source={
                showPassword ? (
                  <Ionicons
                    name='ios-eye-off-outline'
                    size={24}
                    color={colors.black}
                  />
                ) : (
                  <Ionicons
                    name='ios-eye-outline'
                    size={24}
                    color={colors.black}
                  />
                )
              }
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;
