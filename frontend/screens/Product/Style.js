import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'relative',
    top: -30,
    height: '100%',
  },
  title: {
    color: colors.black,
    fontSize: 30,
    textTransform: 'capitalize',
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 20,
    marginTop: 30,
    opacity: 0.7,
  },
});
