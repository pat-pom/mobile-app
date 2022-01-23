import React, {useContext, useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, TouchableOpacity, View, Keyboard} from 'react-native';

import {AuthContext} from '../context/AuthContext';
import {GoBackButton} from '../components/Buttons';
import {Icon} from '../components/Icon';

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
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const showKeyboard = Keyboard.addListener('keyboardDidShow', () =>
      setIsKeyboardVisible(true),
    );

    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () =>
      setIsKeyboardVisible(false),
    );

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  const screenGuard = (navigation, route) =>
    auth.isAuthenticated
      ? navigation.navigate(route.name)
      : navigation.navigate('Login', {name: route.name});

  const setTabBarIcon = ({focused, color, size, route}) => {
    let iconName;

    if (route.name === 'Home')
      iconName = focused ? 'ios-home' : 'ios-home-outline';
    else if (route.name === 'Search')
      iconName = focused ? 'ios-search' : 'ios-search-outline';
    else if (route.name === 'AddProduct') {
      iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
      color = '#fff';
    } else if (route.name === 'Chat')
      iconName = focused ? 'ios-chatbox' : 'ios-chatbox-outline';
    else if (route.name === 'Profile')
      iconName = focused ? 'ios-person' : 'ios-person-outline';

    return <Icon name={iconName} size={size} color={color} />;
  };

  const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
      style={{
        top: isKeyboardVisible ? 0 : -25,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
      activeOpacity={1}>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 35,
          backgroundColor: '#474A57',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({navigation, route}) => ({
        headerTitleStyle: styles.headerTitle,
        headerLeft: () =>
          navigation.canGoBack() && (
            <GoBackButton onPress={() => navigation.goBack()} />
          ),
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        tabBarIcon: ({focused, color, size}) =>
          setTabBarIcon({focused, color, size, route}),
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#474a57',
        tabBarHideOnKeyboard: true,
      })}>
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
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
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

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    lineHeight: 28,
    color: '#18191F',
    fontWeight: '500',
    fontFamily: 'Poppins',
  },
});
