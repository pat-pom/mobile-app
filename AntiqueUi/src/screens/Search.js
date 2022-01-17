import { Image, StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
import Feather from 'react-native-vector-icons/Feather';
import Input from '../components/Input';
import { Dimensions } from 'react-native';
import  {
  SvgUri
} from 'react-native-svg';
import SearchImage from '../assets/images/search.svg';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}


export const Search = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Input/>
      <View style={styles.imageTextWrapper}>r
 
      
      <Text style={styles.text}>Zacznij eksploracje i znajdź coś dla swojego wnętrza</Text>
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container: {
        height: metrics.screenHeight,
        marginLeft: 24,
        marginRight: 24,
      },
      imageTextWrapper:{
        marginTop: 64,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
      },
      text: {
        marginTop: 32,
        fontSize: 18,
        lineHeight: 28,
        fontWeight: "500",
        color:"#18191F",
        textAlign: "center"
      }
});