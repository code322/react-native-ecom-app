import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const style = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.mediumGray,
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
  price: {
    fontWeight: 'bold',
  },
});
