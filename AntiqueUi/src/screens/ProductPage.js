import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import ProductCardSmall from "../components/ProductCardSmall";
import { Button, StyleSheet, View, TouchableOpacity, Text, SafeAreaView, Pressable, Image, ScrollView } from "react-native";
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export const ProductPage = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.top}>
        <Image
          source={require("../assets/images/wallpaperarmchair.png")}
          style={{ height: 333, width: metrics.screenWidth}}
        />
      </View>
      <View style={styles.iconBar}>
        <Feather name="arrow-left" size={24} color="#fff"/>
        <Feather name="share" size={24} color="#fff"/>
      </View>
      <View style={styles.bottom}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
          <View style={{ flexDirection: "column", justifyContent: "space-between", height: 48, marginBottom: 16 }}>
            <Text style={styles.title}>Fotel Skórzany {'\n'}</Text>
            <Text style={styles.subtitle}>ODNOWIONY {'\n'}</Text> 
          </View>
          <Feather name="heart" size={24} color="#F23053"/>
        </View>
        <View style={{ flexDirection: "row", alignItems: "baseline"}}>
          <Text style={styles.price}>460 PLN</Text>
          <Text style={styles.delivery}> + dostawa</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.breakline} />
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/images/profilepic.png")}
            style={styles.profilepic}
          />
          <View>
          <Text style={styles.username}>janek 343</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="star" size={12} color="#F4B813"/>
              <Feather name="star" size={12} color="#F4B813"/>
              <Feather name="star" size={12} color="#F4B813"/>
              <Feather name="star" size={12} color="#F4B813"/>
              <Feather name="star" size={12} color="#F4B813"/>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={styles.descriptionLabel}>
            Opis przedmiotu:
          </Text>
          <Text style={styles.itemDescription}>
            Przedmiotem ogłoszenia jest piękny, odnowiony skórzany fotel.
            Została nabita nowa skóra.
          </Text>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={styles.descriptionLabel}>
            Dane techniczne: 
          </Text>
          <View style={styles.table}>
              <View style={styles.tableItem}>
                <Text style={styles.tableCellOne}>wys.</Text>
                <Text style={styles.tableCellTwo}>53 cm</Text>
              </View>
              <View style={styles.tableItem}>
                <Text style={styles.tableCellOne}>szer.</Text>
                <Text style={styles.tableCellTwo}>300 cm</Text>
              </View>
              <View style={styles.tableItem}>
                <Text style={styles.tableCellOne}>gł.</Text>
                <Text style={styles.tableCellTwo}>53 cm</Text>
              </View>
              <View style={styles.tableItem}>
                <Text style={styles.tableCellOne}>waga:</Text>
                <Text style={styles.tableCellTwo}>100 kg</Text>
              </View>
              <View style={styles.tableItem}>
                <Text style={styles.tableCellOne}>stan:</Text>
                <Text style={styles.tableCellTwo}>odnowiony</Text>
              </View>
              <View style={styles.tableItem}>
                <Text style={styles.tableCellOne}>uszkodzony:</Text>
                <Text style={styles.tableCellTwo}>nie</Text>
              </View>
          </View>
        </View>
        <Text style={styles.titleSmall}>Inne ogłoszenia:</Text>
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
        <View style={styles.buttonsBox}>
          <TouchableOpacity style={styles.messageButton} onPress={() => {}}>
            <Text style={styles.messageLabel}>Wiadomość</Text>
          </TouchableOpacity>


          <Pressable style={({pressed}) => [
              {
                backgroundColor: pressed ? '#064F38' : '#21A179',
                width: 152,
                height: 52,
                padding: 8,
                borderRadius: 4
              },
            ]}
            >
            <Text style={styles.buyLabel}>Kup przedmiot</Text>
          </Pressable>



        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    height: 333,
    backgroundColor: "#969BAB"
  },
  iconBar:{
    position: "absolute",
    marginLeft: 24,
    // marginRight: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 48,
    width: metrics.screenWidth - 48
  },
  table: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 16,
    marginBottom: 8
  },
  tableItem: {
    width: "45%",
    fontFamily: "Poppins",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8
  },
  title: {
    lineHeight: 28,
    fontSize: 18,
    color: "#5B4D48",
    fontFamily: "Poppins"
  },
  tableCellOne: {
    color: "#A3AEAB", 
    fontSize: 14, 
    lineHeight: 24,
    fontFamily: "Poppins"
  },
  tableCellTwo: {
    color: "#18191F", 
    fontSize: 14, 
    lineHeight: 24,
    fontFamily: "Poppins"
  },
  subtitle: {
    lineHeight: 20,
    fontSize: 12,
    color: "#5B4D48",
    fontFamily: "Poppins",
    
  },
  price: {
    color: "#2F2622",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Poppins"
  },
  delivery: {
    color: "#A3AEAB",
    fontFamily: "Poppins"
  },
  breakline: {
    flex: 1,
    height: 2,
    backgroundColor: "#E6EBEA",
    marginTop: 16,
    marginBottom: 16
  },
  profilepic: {
    alignSelf: "center",
    height: 48,
    width: 48,
    marginRight: 16
  },
  titleSmall: {
    fontFamily: "Poppins",
    fontSize: 16,
    lineHeight: 24,
    color: "#2F2622"
  },
  username: {
    fontSize: 12,
    lineHeight: 24,
    fontFamily: "Poppins"
  },
  buyButton: {
    width: 152,
    height: 52,
    backgroundColor: "#21A179",
    padding: 6,
    borderRadius: 4,
    fontFamily: "Poppins"
  },
  descriptionLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Poppins",
    color: "#2F2622"
  },
  itemDescription: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 24,
    color: "#424D49",
    fontFamily: "Poppins"
  },
  buttonsBox: {
    flexDirection: "row",
    width: 328,
    justifyContent: "space-between",
    marginTop: 20
  },
  messageButton: {
    width: 152,
    height: 52,
    borderRadius: 4,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 8,
    fontFamily: "Poppins"
  },
  buyLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Poppins",
    textAlign: "center",
    paddingTop: 5,
    color: "white"
  },
  messageLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Poppins",
    textAlign: "center",
    paddingTop: 5
  },
  bottom: {
    paddingTop: 8,
    paddingLeft: 24,
    paddingRight: 24,
  }
});

export default ProductPage;
