import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, TextInput } from "react-native";
import { BottomNavigation } from "../components/BottomNavigation";
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}


export const Chat = ({ navigation, props }) => {
  return (
    <SafeAreaView style={{ padding: 24 }}>
      <View style={styles.product}>
        <Image
          source={require("../assets/images/wallpaperarmchair.png")}
          style={{ height: 72, width: 72, borderRadius: 4, marginRight: 10 }}
        />

        <View>
          <Text style={{ fontSize: 11, color: "#424D49" }}>Fotel Skórzany</Text>
          <Text style={{ fontSize: 12, color: "#424D49" }}>Odnowiony {"\n"}{"\n"}</Text>
          <Text style={{ color: "#60716A" }}>230 PLN</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.breakline} />
      </View>

      <View style={styles.msgsBox}>
        <View style={styles.buyerBox}>
          <View style={styles.buyer}>
            <Text style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              fringilla quam eu faci lisis mollis.{" "}
            </Text>
          </View>
          <Text style={styles.time}>12:34 PM</Text>
        </View>

        <View style={styles.sellerBox}>
          <View style={styles.seller}>
            <Text style={{ color: "#151E1B" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </Text>
          </View>
          <Text style={styles.time}>12:34 PM</Text>
        </View>

        <View style={styles.buyerBox}>
          <View style={styles.buyer}>
            <Text style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              fringilla quam eu faci lisis mollis.{" "}
            </Text>
          </View>
          <Text style={styles.time}>12:35 PM</Text>
        </View>

        <View style={styles.sellerBox}>
          <View style={styles.seller}>
            <Text style={{ color: "#151E1B" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              fringilla quam eu faci lisis mollis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.{" "}
            </Text>
          </View>
          <Text style={styles.time}>12:35 PM</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.breakline} />
      </View>

      <View style={styles.messagingBox}>
        <TextInput
          style={styles.msgInput}
          placeholder="Napisz wiadomosc"
        ></TextInput>

        <TouchableOpacity style={styles.sendButton} onPress={() => {}}>
          <Text>ico</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  product: {
    height: 76,
    borderRadius: 4,
    flexDirection: "row"
  },
  breakline: {
    flex: 1,
    height: 2,
    backgroundColor: "#E6EBEA",
    marginTop: 10
  },
  msgsBox: {
    height: 470,
    flexDirection: "column",
    paddingTop: 10,
    paddingBottom: 10
  },
  buyer: {
    backgroundColor: "#21A179",
    padding: 12,
    borderRadius: 8,
    fontFamily: "Poppins"
  },
  buyerBox: {
    maxWidth: "80%",
    alignSelf: "flex-end",
    marginBottom: 10
  },
  seller: {
    backgroundColor: "#E6EBEA",
    padding: 12,
    borderRadius: 8,
    fontFamily: "Poppins"
  },
  sellerBox: {
    maxWidth: "80%",
    alignSelf: "flex-start",
    marginBottom: 10
  },
  time: {
    color: "#A3AEAB",
    alignSelf: "flex-end"
  },
  messagingBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  msgInput: {
    height: 52,
    width: 267,
    borderRadius: 4,
    borderWidth: 1,
    padding: 6,
    borderColor: "#A3AEAB",
    fontSize: 14
  },
  sendButton: {
    backgroundColor: "#21A179",
    width: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4
  }
});

export default Chat;