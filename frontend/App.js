import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './state/store';
import Products from './screens/Products/Products';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar style='auto' />
        <Products />
      </SafeAreaProvider>
    </Provider>
  );
}
