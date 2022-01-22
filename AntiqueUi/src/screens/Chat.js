import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import { BottomNavigation } from "../components/BottomNavigation";
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}


export const Chat = ({ navigation, props }) => {
  return (
    <SafeAreaView style={{marginLeft: 24, marginRight: 24}}>
      
      <View style={styles.product}>
        <Image
          source={require("../assets/images/wallpaperarmchair.png")}
          style={{ height: 72, width: 72, borderRadius: 4, marginRight: 16 }}
        />

        <View style={{flexDirection: "column", justifyContent: "space-between"}}>
          <View>
            <Text style={{ fontSize: 11, color: "#424D49", lineHeight: 16, fontFamily: "Poppins", fontWeight: "500"}}>Fotel Skórzany</Text>
            <Text style={{ fontSize: 12, color: "#424D49", lineHeight: 20, fontFamily: "Poppins", fontWeight: "500", textTransform: "uppercase"}}>Odnowiony </Text>
          </View>
          <Text style={{ fontSize: 12, color: "#424D49", lineHeight: 20, fontFamily: "Poppins", fontWeight: "500"}}>230 PLN</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.breakline} />
      </View>
      <ScrollView>
      <View style={styles.msgsBox}>
        <View style={styles.buyerBox}>
          <View style={styles.buyer}>
            <Text style={styles.messageTextWhite} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              fringilla quam eu faci lisis mollis.{" "}
            </Text>
          </View>
          <Text style={styles.time}>12:34 PM</Text>
        </View>

        <View style={styles.sellerBox}>
          <View style={styles.seller}>
            <Text style={styles.messageText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </Text>
          </View>
          <Text style={styles.time}>12:34 PM</Text>
        </View>

        <View style={styles.buyerBox}>
          <View style={styles.buyer}>
            <Text style={styles.messageTextWhite}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              fringilla quam eu faci lisis mollis.{" "}
            </Text>
          </View>
          <Text style={styles.time}>12:35 PM</Text>
        </View>

        <View style={styles.sellerBox}>
          <View style={styles.seller}>
            <Text style={styles.messageText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              fringilla quam eu faci lisis mollis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.{" "}
            </Text>
          </View>
          <Text style={styles.time}>12:35 PM</Text>
        </View>
      </View>
      </ScrollView>
      <View style={styles.messagingBox}>
        <TextInput
          style={styles.msgInput}
          placeholder="Napisz wiadomosc"
        ></TextInput>

        <TouchableOpacity style={styles.sendButton} onPress={() => {}}>
          <Feather name="send" size={20} color="white"/>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  product: {
    marginTop: 8,
    height: 76,
    borderRadius: 4,
    flexDirection: "row"
  },

  breakline: {
    width: metrics.screenWidth,
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
  messageText:{
    fontFamily: "Poppins",
    fontSize: 14,
    lineHeight: 20,
    color: "#151E1B"
  },
  messageTextWhite:{
    fontFamily: "Poppins",
    fontSize: 14,
    lineHeight: 20,
    color: "white"
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
    alignSelf: "flex-end",
    fontFamily: "Poppins",
    lineHeight: 20,
    fontSize: 12,
    marginTop: 8,
    fontWeight: "500",
    textTransform: "uppercase"
  },
  messagingBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  msgInput: {
    fontFamily: "poppins",
    height: 52,
    borderColor: '#969BAB',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 16,
    fontSize: 14,
    fontWeight: "400",
    color:'#969BAB',
    width: metrics.screenWidth - 107,
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