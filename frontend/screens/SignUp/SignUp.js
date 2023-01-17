import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Container from '../../components/Container/Container';
import { Ionicons } from '@expo/vector-icons';
import FormContainer from '../../components/FormContainer/FormContainer';
import { ScrollView } from 'react-native-gesture-handler';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { styles } from './Style';
import { colors } from '../../theme/colors';

const SignUp = () => {
  return (
    <Container>
      <View style={styles.navContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name='arrow-back-outline' size={40} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Sign Up</Text>
      </View>
      <FormContainer>
        <ScrollView keyboardShouldPersistTaps={'handled'}>
          <View>
            <InputField label={'name'} placeholder={'John Smith'} />
            <InputField label={'e-mail'} placeholder={'example@gmail.com'} />
            <InputField
              label={'password'}
              type={'password'}
              placeholder={'*****'}
            />
          </View>
          <Button
            title={'sign up'}
            bgColor={colors.black}
            txColor={colors.white}
          />
        </ScrollView>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
