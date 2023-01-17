import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 16,
    marginBottom: 5,
    color: colors.black,
  },
  inputContainer: {
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    right: 5,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  icon: {
    height: 30,
    width: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    fontSize: 16,
    paddingHorizontal: 7,
    paddingVertical: 16,
    borderRadius: 10,
  },
});
