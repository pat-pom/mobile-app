import { Keyboard, TouchableOpacity ,StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
import { Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const {width, height} = Dimensions.get('window');
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};


export const Input = ({ navigation }) => {
  
  return (
      <View style={styles.inputWrapper}>
      <TextInput
        style={{
          height: 52,
          borderColor: '#969BAB',
          borderWidth: 1,
          borderRadius: 4,
          paddingLeft: 16,
          fontSize: 14,
          //lineHeight: 28,
          fontWeight: "400",
          color:'#969BAB',
          marginTop: 32,
          //marginBottom: 40,
          width: metrics.screenWidth - 48,
        }}
        placeholder="Search"
      />
      <Feather name="search" size={16} color="#969BAB" style={styles.inputIcon}/>
      </View>
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
  inputWrapper:{
    flexDirection: "row",
    alignItems: "center"
  },
  inputIcon:{
    position: "relative",
    marginLeft: "auto",
    marginRight: 16,
    marginBottom: -32,
   // marginRight: metrics.screenWidth
  }
});

export default Input