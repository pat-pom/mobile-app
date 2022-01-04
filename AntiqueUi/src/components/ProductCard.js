import { Keyboard, TouchableOpacity ,StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
import { Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const {width, height} = Dimensions.get('window');
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};


export const ProductCard = ({ navigation }) => {
  
  return (
      <View style={styles.container}>
          <View style={styles.image}>
          </View>
          <View style={styles.header}>
              <Text style={styles.price}>3000 PLN</Text>
              <Feather name="heart" size={20} style={styles.heart}/>
          </View>
          <View style={styles.content}>
              <Text style={styles.title}>Szafa RTV</Text>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: 152,
    marginTop: 16
  },
  image: {
    height: 152,
    width: 152,
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

export default ProductCard