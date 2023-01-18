import { colors } from '../theme/colors';
import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';

export const settingList = [
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
