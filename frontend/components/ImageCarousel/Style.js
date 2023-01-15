import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme/colors';

const { height, width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.45,
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
