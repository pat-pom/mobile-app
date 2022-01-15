import React from "react";
import {
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

export const ForgotPassword = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.message}>
          Nie pamiętasz swojego hasła? Podaj nam swój adres e-mail, abyśmy mogli
          jak najszybciej je przywrócić.
        </Text>
        <TextInput placeholder="E-mail address" style={styles.textInput} />
        <Text style={styles.subMessage}>
          Wyślemy link resetujący hasło na Twój e-mail
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.textInsideButton}>Zresetuj hasło</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight,
    marginLeft: 24,
    marginRight: 24,
  },
  message: {
    fontSize: 14,
    lineHeight: 24,
    color: "#18191F",
    marginTop: 24,
    fontFamily: "Poppins",
    fontWeight: "400",
  },
  subMessage: {
    fontSize: 12,
    lineHeight: 24,
    fontWeight: "500",
    color: "#474A57",
    marginLeft: 16,
    marginTop: 8,
  },
  textInput: {
    height: 52,
    borderColor: "#969BAB",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 16,
    fontSize: 14,
    //lineHeight: 28,
    fontWeight: "400",
    color: "#969BAB",
    marginTop: 32,
    width: metrics.screenWidth - 48,
  },
  button: {
    height: 52,
    borderRadius: 4,

    fontWeight: "400",
    backgroundColor: "#18191F",
    marginTop: 24,
    width: metrics.screenWidth - 48,
    alignItems: "center",
    justifyContent: "center",
  },
  textInsideButton: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    color: "#fff",
    fontFamily: "Poppins",
  },
});

export default ForgotPassword;
