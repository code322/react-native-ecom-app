import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './Style';
import Container from '../../components/Container/Container';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { settingList } from '../../data/settingList';
import { useDispatch } from 'react-redux';
import { signOut } from '../../state/authSlice';

const Setting = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Text style={style.title}>Settings</Text>
      {
        <>
          {settingList.map((setting, index) => (
            <SettingList
              key={index}
              title={setting.title}
              icon={setting.icon}
              handlePress={
                setting.title === 'logout'
                  ? () => dispatch(signOut())
                  : () => {}
              }
            />
          ))}
        </>
      }
    </Container>
  );
};

export default Setting;

const SettingList = ({ handlePress, title, icon }) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
        <View style={style.container}>
          <View style={style.action}>
            <View style={style.iconContainer}>{icon}</View>
            <Text style={style.settingTitle}>{title}</Text>
          </View>
          <MaterialIcons
            name='keyboard-arrow-right'
            size={24}
            color={colors.gray}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};
