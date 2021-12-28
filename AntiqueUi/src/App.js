import Constants from 'expo-constants';
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet, View, useColorScheme, SafeAreaView } from 'react-native';

import { Home } from './screens/Home';
import { AddProduct } from './screens/AddProduct';
import { BottomNavigation } from './components/BottomNavigation';
import { Dimensions } from 'react-native';

//const Stack = createNativeStackNavigator();



const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',
  }
}

export default function App() {
  const scheme = useColorScheme();

  return( 
    
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
    
    <BottomNavigation/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
  },
  container: {

  },
  header: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Poppins",
  }
});
