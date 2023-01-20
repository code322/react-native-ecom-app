import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme/colors';

const { height, width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  imageContainer: {
    width: width,
    height: height * 0.55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    flex: 1,
    aspectRatio: 0.8,
    resizeMode: 'contain',
  },

  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
    zIndex: 100,
  },
  paginationLine: {
    height: 4,
    width: 30,
    backgroundColor: colors.white,
    margin: 5,
  },
  activeLine: {
    backgroundColor: colors.black,
    width: 30,
  },
});
