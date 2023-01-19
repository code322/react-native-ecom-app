import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import { Ionicons } from '@expo/vector-icons';
import FormContainer from '../../components/FormContainer/FormContainer';
import { ScrollView } from 'react-native-gesture-handler';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { styles } from './Style';
import { colors } from '../../theme/colors';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../state/authSlice';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.authSlice);

  const handleSignUp = async () => {
    const body = { name, email, password };
    dispatch(signUp(body));
  };

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
            <InputField
              label={'name'}
              placeholder={'John Smith'}
              input={name}
              handleChange={(value) => setName(value)}
            />
            <InputField
              label={'e-mail'}
              placeholder={'example@gmail.com'}
              input={email}
              handleChange={(value) => setEmail(value)}
            />
            <InputField
              label={'password'}
              type={'password'}
              placeholder={'*****'}
              input={password}
              handleChange={(value) => setPassword(value)}
            />
          </View>
          <Button
            title={'sign up'}
            bgColor={colors.black}
            txColor={colors.white}
            handlePress={handleSignUp}
          />
          {error && <Text style={styles.errorMessage}>{error}</Text>}
        </ScrollView>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
