import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { BottomNavigation } from "../components/BottomNavigation";
import { Dimensions } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Input from "../components/Input";
import { ProductCard } from "../components/ProductCard";
import { ProductCardSmall } from "../components/ProductCardSmall";
import { Notifications } from "./Notifications";
import { Messages } from "./Messages";
import { Chat } from "./Chat";
import axios from "../config/axios";
const { width, height } = Dimensions.get("window");

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Hej Aleks</Text>
          <TouchableOpacity
            style={styles.bell}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Feather name="bell" size={24} />
          </TouchableOpacity>
        </View>
        <Input />
        <Text style={styles.titleSmall}>Nowości</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        
        >
          <ProductCardSmall
            name="Szafa RTV"
            price="3000 PLN"
            style={{ marginRight: 16 }}
          />
          <ProductCardSmall
            name="Komoda"
            price="2900 PLN"
            style={{ marginRight: 16 }}
          />
          <ProductCardSmall
            name="Barek"
            price="9000 PLN"
            style={{ marginRight: 16 }}
          />
        </ScrollView>
        <Text style={styles.titleSmall}>Dla Ciebie</Text>
        <View style={styles.forYou}>
          <ProductCard name="Szafa RTV" price="3000 PLN" />
          <ProductCard name="Komoda" price="2900 PLN" />
          <ProductCard name="Krzesło" price="1000 PLN" />
          <ProductCard name="Komoda" price="900 PLN" />
          <ProductCard name="TV Rubin" price="30000 PLN" />
          <ProductCard name="Sofa" price="300 PLN" />
          <ProductCard name="Fotel" price="1000 PLN" />
          <ProductCard name="Barek" price="9000 PLN" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: true, title: "Powiadomienia" }}
      />
    </Stack.Navigator>
  );
};

export const Mess = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Messages"
          component={Messages}
       
      />
      <Stack.Screen
          name="Chat"
          component={Chat}
          options={({route}) => ({
            title: route.params.userName,
            headerShown: true
          })}
    />
    </Stack.Navigator>
  );
};



const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight,
    marginLeft: 24,
    marginRight: 24,
  },
  header: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bell: {
    padding: 12,
  },
  title: {
    fontSize: 36,
    lineHeight: 48,
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#151E1B"
  },
  titleSmall: {
    fontSize: 22,
    lineHeight: 32,
    fontFamily: "Poppins",
    fontWeight: "600",
    marginTop: 40,
    color: "#151E1B"
  },
  forYou: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
