import React from "react";
import { Button, StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export const ProductPage = () => {
  return (
    <SafeAreaView>
      <SafeAreaView style={styles.top}>
        <Image
          source={require("../assets/images/wallpaperarmchair.png")}
          style={{ height: 333, width: 375 }}
        />
      </SafeAreaView>

      <View style={styles.bottom}>
        {/* <SafeAreaView>
          <SafeAreaView> */}
            <Text style={styles.title}>Fotel Skórzany</Text>
            <br />
            <Text style={styles.subtitle}>ODNOWIONY</Text>
            <br />
          {/* </SafeAreaView>
        </SafeAreaView> */}
        <SafeAreaView style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text style={styles.price}>460 PLN</Text>
          <Text style={styles.delivery}> + dostawa</Text>
        </SafeAreaView>

        <SafeAreaView style={{ flexDirection: "row", alignItems: "center" }}>
          <SafeAreaView style={styles.breakline} />
        </SafeAreaView>

        <SafeAreaView style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
          <Image
            source={require("../assets/images/profilepic.png")}
            style={styles.profilepic}
          />
          <Text style={styles.username}>janek 343</Text>
        </SafeAreaView>

        <SafeAreaView style={{ marginTop: 20 }}>
          <Text style={styles.descriptionLabel}>
            Opis przedmiotu:
            <br />
          </Text>
          <Text style={styles.itemDescription}>
            Przedmiotem ogłoszenia jest piękny, odnowiony skórzany fotel.
            Została nabita nowa skóra.
          </Text>
        </SafeAreaView>
        
        <SafeAreaView style={styles.buttonsBox}>
          <TouchableOpacity style={styles.messageButton} onPress={() => {}}>
            <Text style={styles.messageLabel}>Wiadomość</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyButton} onPress={() => {}}>
            <Text style={styles.buyLabel}>Kup przedmiot</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    height: 333,
    backgroundColor: "#969BAB"
  },
  title: {
    lineHeight: 28,
    fontSize: 18,
    color: "#5B4D48"
  },
  subtitle: {
    lineHeight: 20,
    marginTop: -20,
    fontSize: 12,
    color: "#5B4D48"
  },
  price: {
    color: "#2F2622",
    fontSize: 24,
    fontWeight: "bold"
  },
  delivery: {
    color: "#A3AEAB"
  },
  breakline: {
    flex: 1,
    height: 2,
    backgroundColor: "#E6EBEA",
    marginTop: 20
  },
  profilepic: {
    alignSelf: "center",
    height: 48,
    width: 48,
    marginRight: 20
  },
  username: {
    fontSize: 12,
    lineHeight: 24
  },
  buyButton: {
    width: 152,
    height: 52,
    backgroundColor: "#21A179",
    padding: 6,
    borderRadius: 4
  },
  descriptionLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Poppins",
    color: "#2F2622"
  },
  itemDescription: {
    fontSize: 14,
    lineHeight: 24,
    color: "#424D49"
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
    borderWidth: 2,
    padding: 6
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
    padding: 24
  }
});

export default ProductPage;
