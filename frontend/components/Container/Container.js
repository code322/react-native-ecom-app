import { SafeAreaView } from 'react-native-safe-area-context';

const Container = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'white',
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default Container;
