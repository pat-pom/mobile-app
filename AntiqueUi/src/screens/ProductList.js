import { Image, StyleSheet, Text, View, Button, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
import Feather from 'react-native-vector-icons/Feather';
import Input from '../components/Input';
import Filters from '../components/Filters';
import { Dimensions } from 'react-native';
import {ProductCard} from '../components/ProductCard'
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}


export const ProductList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
      <Input/>
      <Filters/>
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
      },
        forYou: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start"
      },
});