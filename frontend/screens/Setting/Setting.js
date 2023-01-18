import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './Style';
import Container from '../../components/Container/Container';
import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

const settingList = [
  {
    title: 'message',
    icon: <AntDesign name='message1' size={24} color={colors.gray} />,
  },
  {
    title: 'notifications',
    icon: (
      <Ionicons
        name='ios-notifications-outline'
        size={24}
        color={colors.gray}
      />
    ),
  },
  {
    title: 'about',
    icon: (
      <Ionicons
        name='ios-information-circle-outline'
        size={24}
        color={colors.gray}
      />
    ),
  },
  {
    title: 'logout',
    icon: <AntDesign name='logout' size={24} color={colors.gray} />,
  },
];
const Setting = () => {
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
