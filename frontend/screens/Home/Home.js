import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './Style';
import { colors } from '../../theme/colors';
import Button from '../../components/Button/Button';
const Home = ({ navigation }) => {
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
          handlePress={() => navigation.push('SignUp')}
        />
        <Button
          title={'sign in'}
          bgColor={colors.white}
          txColor={colors.black}
          handlePress={() => navigation.push('SignIn')}
        />
      </View>
    </View>
  );
};

export default Home;
