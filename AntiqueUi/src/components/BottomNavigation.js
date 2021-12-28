import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { AddProduct } from '../screens/AddProduct';
import { Profile } from '../screens/Profile';
import { Search } from '../screens/Search';
import { Chat } from '../screens/Chat';

const Tab = createBottomTabNavigator();

export function BottomNavigation() {
  return (
    <Tab.Navigator  
    screenOptions= {{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#969BAB',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="AddProduct" component={AddProduct} />
      <Tab.Screen name="Chat" component={Chat} options={{ tabBarBadge: 3 }}/>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}