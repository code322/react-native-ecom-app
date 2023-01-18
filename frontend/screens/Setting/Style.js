import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.mediumGray,
    borderBottomWidth: 1,
    paddingVertical: 25,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  iconContainer: {
    backgroundColor: colors.lightGray,
    padding: 10,
    borderRadius: 5,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingTitle: {
    marginLeft: 20,
    fontSize: 18,
    textTransform: 'capitalize',
  },
});
