import { StyleSheet } from 'react-native';

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
    color: colors.blue,
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
    borderColor: colors.blue,
    fontSize: 16,
    paddingHorizontal: 7,
    paddingVertical: 16,
    borderRadius: 10,
  },
});
