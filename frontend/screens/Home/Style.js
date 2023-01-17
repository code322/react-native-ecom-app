import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  titleContainer: {
    marginTop: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
  buttonsContainer: {
    marginTop: 40,
  },
});
