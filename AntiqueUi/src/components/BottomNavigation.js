import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { AddProduct } from '../screens/AddProduct';
import { Profile } from '../screens/Profile';
import { Splash } from '../screens/Splash';
import { Notifications } from '../screens/Notifications';
import { Search } from '../screens/Search';
import { Chat } from '../screens/Chat';
import { Messages } from '../screens/Messages';
import { Join } from '../screens/Join';
import { Login } from '../screens/Login';
import { ForgotPassword } from '../screens/ForgotPassword';
import { Checkout } from '../screens/Checkout';
import { Register } from '../screens/Register';
import { ProductPage } from '../screens/ProductPage';
import { Camera } from 'react-feather';
import { StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {ProductList} from '../screens/ProductList';
const Tab = createBottomTabNavigator();

export function BottomNavigation() {
  return (
    <Tab.Navigator
      style={styles.container}
      screenOptions={({ route, navigation }) => ({
        headerTitleStyle: {
          fontSize: 18,
          lineHeight: 28,
          color: "#18191F",
          fontWeight: "500",
          fontFamily: "Poppins"
        },
        headerLeft: () => navigation.canGoBack() && <Feather name="arrow-left" size={24} onPress={() => navigation.goBack()} style={{ marginLeft: 24 }} />,
        headerShadowVisible: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Messages') {
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
        tabBarActiveTintColor: '#21A179',
        tabBarInactiveTintColor: '#60716A',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Notifications" component={Notifications} options={{ headerShown: true, tabBarShowLabel: false, title: "Powiadomienia" }} /> */}
      {/* <Tab.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: true, tabBarShowLabel: false, title: "Odzyskaj hasło"}}/> */}
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Chat" component={Chat} options={{ headerShown: true, title: "UserName" }}/>
      <Tab.Screen name="ProductPage" component={ProductPage} />
      {/* <Tab.Screen name="Join" component={Join} />
      <Tab.Screen name="Login" component={Login} />*/}

      <Tab.Screen name="AddProduct" component={AddProduct} style={styles.callToAction} options={{ headerShown: true, title: "Dodaj produkt" }} />
      <Tab.Screen name="Messages" component={Messages} options={{ headerShown: true, title: "Wiadomości", tabBarBadge: 3 }}/>
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: true, title: "Mój Profil" }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  callToAction: {

  },
  header: {
    color: "red"
  }
});