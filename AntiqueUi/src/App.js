import Constants from 'expo-constants';
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet, View, useColorScheme } from 'react-native';

import { Home } from './screens/Home';
import { AddProduct } from './screens/AddProduct';
import { BottomNavigation } from './components/BottomNavigation';

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
      <View style={styles.container}>
        <View style={styles.statusBar} />
        {/* <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerStyle: styles.header,
            headerLeft: () => navigation.canGoBack() && <Icon name="arrowleft" size={26} onPress={() => navigation.goBack()} />,
            headerShadowVisible: false,
          })}
        >
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='AddProduct'
            component={AddProduct}
            options={{
              title: "Add advertisement",
            }}
          />
        </Stack.Navigator> */}
      </View>
      <BottomNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Poppins",
  }
});
