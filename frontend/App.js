import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './state/store';
import Products from './screens/Products/Products';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar style='auto' />
          <Products />
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
}
