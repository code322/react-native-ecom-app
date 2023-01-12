import { SafeAreaView } from 'react-native-safe-area-context';

const Container = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, marginTop: 15 }}>
      {children}
    </SafeAreaView>
  );
};

export default Container;
