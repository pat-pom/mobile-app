import React from "react";
import {
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  SafeAreaView
} from "react-native";
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

// import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const ForgotPassword = () => {
  return (
    <SafeAreaView>


      <View style={styles.middle}>
        {/* <TextInput style={styles.input} placeholder="E-mail address" /> */}
        <Text style={styles.pwdinfo}>Nie pamiętasz swojego hasła? Podaj nam swój adres e-mail, abyśmy mogli jak najszybciej je przywrócić</Text>
        <TextInput style={styles.input} placeholder="E-mail address" />
        {/* <TouchableOpacity onPress={() => {}}> */}
          <Text style={{ marginLeft: "-5%", marginTop: 5 }}>
            Wyślemy link resetujący hasło na Twój e-mail
          </Text>
        {/* </TouchableOpacity> */}

        <TouchableOpacity style={styles.btn1} onPress={() => {}}>
          <Text style={styles.napis1}>Zaloguj się</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
//   top: {
//     alignItems: "center",
//     height: 100
//   },
  middle: {
    height: 300,
    alignItems: "center"
  },
  bottom: {
    height: 250,
    alignItems: "center"
  },
  btn: {
    width: metrics.screenWidth - 48,
    height: 50,
    marginTop: 30,
    borderRadius: 3,
    backgroundColor: "#D9DBE1",
    padding: 10
  },
  btn1: {
    width: metrics.screenWidth - 48,
    height: 50,
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: "#18191F",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 8
  },
  napis: {
    fontSize: 20,
    textAlign: "center",
    padding: "auto"
  },
  napis1: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  input: {
    width: "80%",
    height: 50,
    marginTop: 30,
    borderRadius: 3,
    padding: 10,
    borderStyle: "solid",
    borderWidth: 2
  },
  pwdinfo: {
    width: "80%",
    height: 50,
    marginLeft: "-5%",
    marginTop: 30,
    borderRadius: 3,
    padding: 10,
  }
});

export default ForgotPassword;
