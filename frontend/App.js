import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './state/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './navigation/Tabs';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar style='auto' />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Tabs' component={Tabs} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
}
