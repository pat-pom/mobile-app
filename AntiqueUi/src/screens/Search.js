import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
import Feather from 'react-native-vector-icons/Feather';
import Input from '../components/Input';
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}
export const Search = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Input/>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container: {
        height: metrics.screenHeight,
        marginLeft: 24,
        marginRight: 24,
      }
});