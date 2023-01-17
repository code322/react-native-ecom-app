import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './Style';
import Container from '../../components/Container/Container';
import { colors } from '../../theme/colors';
import Button from '../../components/Button/Button';
const Home = () => {
  return (
    <View style={style.container}>
      <Image source={require('../../assets/images/hero.png')} />
      <View style={style.titleContainer}>
        <Text style={style.title}>You'll Find</Text>
        <Text
          style={[
            style.title,
            { color: colors.orange, textDecorationLine: 'underline' },
          ]}
        >
          All You Need
        </Text>
        <Text style={style.title}>Here!</Text>
      </View>
      <View style={style.buttonsContainer}>
        <Button
          title={'sign up'}
          bgColor={colors.black}
          txColor={colors.white}
        />
        <Button
          title={'sign in'}
          bgColor={colors.white}
          txColor={colors.black}
        />
      </View>
    </View>
  );
};

export default Home;
