import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from '../screens/Products/Products';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Product from '../screens/Product/Product';
import Cart from '../screens/Cart/Cart';
import { Fontisto } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import Favourites from '../screens/Favourite/Favourite';
import Setting from '../screens/Setting/Setting';
import { AntDesign } from '@expo/vector-icons';

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
      <TabsStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name='shopping-bag'
              size={24}
              color={focused ? colors.blue : colors.black}
            />
          ),
          title: 'Products',
          tabBarActiveTintColor: colors.blue,
          tabBarInactiveTintColor: colors.black,
        }}
        name='ProductsTab'
        component={ProductsTab}
      />
      <TabsStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name='favorite'
              size={24}
              color={focused ? colors.blue : colors.black}
            />
          ),
          tabBarActiveTintColor: colors.blue,
          tabBarInactiveTintColor: colors.black,
        }}
        name='FavouritesTab'
        component={Favourites}
      />
      <TabsStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name='shopping-cart'
              size={24}
              color={focused ? colors.blue : colors.black}
            />
          ),
          tabBarActiveTintColor: colors.blue,
          tabBarInactiveTintColor: colors.black,
        }}
        name='Cart'
        component={Cart}
      />
      <TabsStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name='setting'
              size={24}
              color={focused ? colors.black : colors.blue}
            />
          ),
          tabBarActiveTintColor: colors.blue,
          tabBarInactiveTintColor: colors.black,
        }}
        name='Setting'
        component={Setting}
      />
    </TabsStack.Navigator>
  );
};
