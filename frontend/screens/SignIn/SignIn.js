import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../theme/colors';
import { styles } from './Style';
import FormContainer from '../../components/FormContainer/FormContainer';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { clearError, selectError, signIn } from '../../state/authSlice';
import { validEmail, validInput } from '../../helpers/tools';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
  }, [email, password]);

  let valPassword = validInput(password);
  let valEmail = validEmail(email);

  let disableButton = valEmail && valPassword;
  const handleSignIn = async () => {
    const body = { email, password };
    if (valPassword && valEmail) {
      dispatch(signIn(body));
    }
  };

  return (
    <Container>
      <View style={styles.navContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name='chevron-back' size={34} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Sign In</Text>
      </View>
      <FormContainer>
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            flexGrow: 0.7,
          }}
        >
          <View style={styles.container}>
            <View>
              <Image
                style={styles.image}
                source={require('../../assets/images/login.png')}
              />
            </View>
            <View>
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
              <Button
                title={'sign in'}
                bgColor={colors.black}
                txColor={colors.white}
                handlePress={handleSignIn}
                disableButton={!disableButton}
              />
              {error && <Text style={styles.errorMessage}>{error}</Text>}
            </View>
          </View>
        </ScrollView>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
