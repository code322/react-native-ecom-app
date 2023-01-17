import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './Style';
import Container from '../../components/Container/Container';
import { colors } from '../../theme/colors';
const Home = () => {
  return (
    <Container>
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
          <TouchableOpacity>
            <Text>sign up</Text>
            <Text>sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Home;
