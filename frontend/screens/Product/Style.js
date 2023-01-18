import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backIconContainer: {
    backgroundColor: colors.mediumGray,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    position: 'absolute',
    zIndex: 100,
    top: 40,
    left: 30,
  },
  product: {
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
    fontWeight: '600',
    opacity: 0.8,
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
  },
  description: {
    fontSize: 18,
    marginTop: 20,
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
