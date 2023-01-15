import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
export const style = StyleSheet.create({
  imageContainer: {
    width: '47%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 5,
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    color: colors.lightBlack,
    fontSize: 14,
  },
});
