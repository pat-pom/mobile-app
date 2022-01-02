import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { AddProduct } from '../screens/AddProduct';
import { Profile } from '../screens/Profile';
import { Splash } from '../screens/Splash';
import { Search } from '../screens/Search';
import { Chat } from '../screens/Chat';
import { Join } from '../screens/Join';
import { Camera } from 'react-feather';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export function BottomNavigation() {
  return (
    <Tab.Navigator
    style={styles.container}  
    screenOptions= {{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#969BAB',
        headerShown: false,
        }}>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Search" component={Search} /> */}
      <Tab.Screen name="Splash" component={Splash} />
      <Tab.Screen name="Join" component={Join} />
      <Tab.Screen name="AddProduct" component={AddProduct}  style={styles.callToAction}  />
      <Tab.Screen name="Chat" component={Chat} options={{ tabBarBadge: 3 }}/>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
        
    },
    callToAction: {

    }
  });