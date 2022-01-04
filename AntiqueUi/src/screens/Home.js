import { TouchableOpacity ,StyleSheet, Text, View, Button, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
import { Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Input from '../components/Input';
import { ProductCard } from '../components/ProductCard';

const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Hej Aleks</Text>
        <TouchableOpacity style={styles.bell}  onPress={() => navigation.navigate('Notifications')}>
          <Feather name="bell" size={24}/>
        </TouchableOpacity>
      </View>
      <Input/>
      <Text style={styles.titleForYou}>Dla Ciebie</Text>
      <View style={styles.forYou}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </View>

      </ScrollView>
    </SafeAreaView>
  )
}

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
  title:{
    fontSize: 36,
    lineHeight: 48,
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  titleForYou: {
    fontSize: 22,
    lineHeight: 32,
    fontFamily: "Poppins",
    fontWeight: "600",

  },
  forYou:{
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start"
  }
});