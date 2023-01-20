import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  navTitle: {
    fontSize: 20,
    marginLeft: 10,
    textTransform: 'capitalize',
  },
  errorMessage: {
    textAlign: 'center',
    marginTop: 5,
  },

  container: {
    height: '100%',
    flexDirection: 'column',
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 300,
  },
});
