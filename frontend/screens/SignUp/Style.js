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
  container: {
    flex: 1,
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 300,
    paddingBottom: 30,
    position: 'relative',
  },
  errorMessage: {
    textAlign: 'center',
    marginTop: 5,
    position: 'absolute',
    bottom: -20,
    width: '100%',
  },
});
