import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { AddProduct } from '../screens/AddProduct';
import { Profile } from '../screens/Profile';
import { Splash } from '../screens/Splash';
import { Search } from '../screens/Search';
import { Chat } from '../screens/Chat';
import { Join } from '../screens/Join';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Camera } from 'react-feather';
import { StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export function BottomNavigation() {
  return (
    <Tab.Navigator
    style={styles.container}  
    // screenOptions= {{
    //     tabBarShowLabel: false,
    //     tabBarActiveTintColor: '#000',
    //     tabBarInactiveTintColor: '#969BAB',
    //     headerShown: false,
    //     }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'Chat') {
          iconName = focused ? 'message-circle' : 'message-circle';
        }
        else if (route.name === 'AddProduct') {
          iconName = focused ? 'plus-circle' : 'plus-circle';
        }
        else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search';
        }
        else if (route.name === 'Profile') {
          iconName = focused ? 'user' : 'user';
        }

        return <Feather name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      {/* <Tab.Screen name="Splash" component={Splash} /> */}
      {/* <Tab.Screen name="Join" component={Join} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} /> */}
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