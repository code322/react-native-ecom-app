import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
    marginBottom: -30,
    position: 'relative',
    top: -30,
    flex: 1,
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
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  addToCart: {
    flex: 1,
    backgroundColor: colors.black,
    borderRadius: 10,
    marginLeft: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCartTitle: {
    color: colors.white,
    fontSize: 20,
  },
  favIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    height: 60,
    width: 60,
  },
});
