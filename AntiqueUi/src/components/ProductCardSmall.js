import { Keyboard, TouchableOpacity ,StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import { BottomNavigation } from './BottomNavigation';
import { Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const {width, height} = Dimensions.get('window');
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};


export const ProductCardSmall = ( props ) => {
  
  return (
      <View style={styles.container}>
          <View style={styles.image}>
          </View>
          <View style={styles.header}>
              <Text style={styles.price}>{props.price}</Text>
              <Feather name="heart" size={20} style={styles.heart}/>
          </View>
          <View style={styles.content}>
              <Text style={styles.title}>{props.name}</Text>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: 144,
    marginTop: 16,
    marginRight: 16
  },
  image: {
    height: 144,
    width: 144,
    backgroundColor: "#D9DBE1",
    borderRadius: 4,
  },
  header: {
      paddingTop: 8,
      flexDirection: "row",
      justifyContent: "space-between"
  },
  heart: {
      marginRight: 8,
      color: "#969BAB"
  },
  price: {
      fontSize: 12,
      lineHeight: 20,
      color: "#474A57",
      fontWeight: "500"
  },
  title: {
      color: "#969BAB",
      fontSize: 11,
      lineHeight: 16,
      fontWeight: "500"
  }
});

export default ProductCardSmall