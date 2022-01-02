import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';

import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}
export const Search = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
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
          marginBottom: 40,
        }}
        placeholder="Search"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        height: metrics.screenHeight,
        marginLeft: 24,
        marginRight: 24,
      },
});