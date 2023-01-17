import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './state/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './navigation/Tabs';
import SignIn from './screens/SignIn/SignIn';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './screens/Home/Home';
import SignUp from './screens/SignUp/SignUp';

export default function App() {
  let persistor = persistStore(store);
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <StatusBar style='auto' />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='SignUp' component={SignUp} />
              <Stack.Screen name='SignIn' component={SignIn} />
              <Stack.Screen name='Home' component={Home} />
              {/* <Stack.Screen name='Tabs' component={Tabs} /> */}
            </Stack.Navigator>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
