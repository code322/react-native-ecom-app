import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from '../screens/Products/Products';
import { createStackNavigator } from '@react-navigation/stack';

import Product from '../screens/Product/Product';

const ProductsTab = () => {
  const ProductsStack = createStackNavigator();
  return (
    <ProductsStack.Navigator screenOptions={{ headerShown: false }}>
      <ProductsStack.Screen name='Products' component={Products} />
      <ProductsStack.Screen name='Product' component={Product} />
    </ProductsStack.Navigator>
  );
};

export const Tabs = () => {
  const TabsStack = createBottomTabNavigator();

  return (
    <TabsStack.Navigator
      screenOptions={{ headerShown: false }}
      sceneContainerStyle={{ overflow: 'visible' }}
    >
      <TabsStack.Screen name='ProductsTab' component={ProductsTab} />
    </TabsStack.Navigator>
  );
};
