import { TouchableOpacity ,StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
import { Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Input from '../components/Input';

const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hej Aleks</Text>
        <TouchableOpacity style={styles.bell}  onPress={() => navigation.navigate('Notifications')}>
          <Feather name="bell" size={24}/>
        </TouchableOpacity>
      </View>
      <Input/>
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
  }
});