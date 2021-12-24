import Constants from 'expo-constants';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

import { Home } from './screens/Home';
import { AddProduct } from './screens/AddProduct';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerStyle: styles.header,
            headerLeft: () => navigation.canGoBack() && <Icon name="arrowleft" size={26} onPress={() => navigation.goBack()} />,
            headerShadowVisible: false,
          })}
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen
            name='AddProduct'
            component={AddProduct}
            options={{
              title: "Dodaj ogłoszenie",
            }}
          />
        </Stack.Navigator>
      </View>
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
