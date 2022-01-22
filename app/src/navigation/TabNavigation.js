import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AuthContext} from '../context/AuthContext';

import {HomeScreen} from '../screens/HomeScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {AddProductScreen} from '../screens/AddProductScreen';
import {ChatScreen} from '../screens/ChatScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const {auth} = useContext(AuthContext);

  const screenGuard = (navigation, route) =>
    auth.isAuthenticated
      ? navigation.navigate(route.name)
      : navigation.navigate('Login');

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="AddProduct"
        component={AddProductScreen}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
            screenGuard(navigation, route);
          },
        })}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
            screenGuard(navigation, route);
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
            screenGuard(navigation, route);
          },
        })}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarItemStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          tabBarItemStyle: {display: 'none'},
        }}
      />
    </Tab.Navigator>
  );
};
