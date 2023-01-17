import { View, Text } from 'react-native';
import React from 'react';
import Container from '../../components/Container/Container';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../theme/colors';
import { styles } from './Style';

const SignIn = ({ navigation }) => {
  return (
    <Container>
      <View style={styles.navContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name='arrow-back-outline' size={40} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Sign In</Text>
      </View>
    </Container>
  );
};

export default SignIn;
