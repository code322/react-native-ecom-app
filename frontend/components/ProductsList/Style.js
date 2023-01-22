import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
export const style = StyleSheet.create({
  imageContainer: {
    width: '47%',
    maxWidth: 200,
    borderColor: colors.mediumGray,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 5,
    padding: 20,
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
