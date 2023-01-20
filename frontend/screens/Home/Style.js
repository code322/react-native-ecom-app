import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  message: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    marginTop: 10,
  },
});
