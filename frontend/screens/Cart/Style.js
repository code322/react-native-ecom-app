import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const style = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    marginTop: 20,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartTitle: {
    // fontWeight: 'bold',
    marginTop: -10,
  },
  shopNow: {
    backgroundColor: colors.black,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 40,
  },
  shopNowTitle: {
    color: colors.white,
  },
});
