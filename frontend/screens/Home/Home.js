import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './Style';
import { colors } from '../../theme/colors';
import Button from '../../components/Button/Button';
import { heroImage } from '../../helpers/api';
const Home = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Image
        source={{
          uri: heroImage,
        }}
        resizeMode='cover'
        style={{
          aspectRatio: 1,
        }}
      />
      <View>
        <View>
          <Text style={style.message}>Welcome Back!</Text>
          <Text>Please register or sign in to continue.</Text>
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
    </View>
  );
};

export default Home;
