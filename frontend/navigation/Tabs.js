import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from '../screens/Products/Products';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo, Ionicons, Fontisto, FontAwesome } from '@expo/vector-icons';
import Product from '../screens/Product/Product';
import Cart from '../screens/Cart/Cart';
import { colors } from '../theme/colors';
import Favourites from '../screens/Favourite/Favourite';
import Setting from '../screens/Setting/Setting';

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
              color={focused ? colors.black : colors.gray}
            />
          ),
          title: 'Products',
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.gray,
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
              color={focused ? colors.black : colors.gray}
            />
          ),
          title: 'Favourite',
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.gray,
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
              color={focused ? colors.black : colors.gray}
            />
          ),
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.gray,
        }}
        name='Cart'
        component={Cart}
      />
      <TabsStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='settings'
              size={24}
              color={focused ? colors.black : colors.gray}
            />
          ),
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.gray,
        }}
        name='Setting'
        component={Setting}
      />
    </TabsStack.Navigator>
  );
};
