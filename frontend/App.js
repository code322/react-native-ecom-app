import { StatusBar } from 'expo-status-bar';
import { Provider, useSelector } from 'react-redux';
import store from './state/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './navigation/Tabs';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { AuthNav } from './navigation/AuthNav';
import { selectIsLoggedIn } from './state/authSlice';

const RootNavigation = () => {
  const Stack = createStackNavigator();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar style='auto' />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLoggedIn ? (
            <Stack.Screen name='Tabs' component={Tabs} />
          ) : (
            <Stack.Screen name='AuthNav' component={AuthNav} />
          )}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default function App() {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}
