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

export const Login = () => {
  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Image
          source={require("../assets/images/icon.png")}
          style={{
            width: 80,
            height: 115,
            top: 30
          }}
        />
      </View>

      <View style={styles.middle}>
        <TextInput style={styles.input} placeholder="E-mail address" />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ marginLeft: "-60%", marginTop: 5 }}>
            Nie pamiętasz hasła?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
          <Text style={styles.loginLabel}>Zaloguj się</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#D9DBE1",
            marginLeft: 10
          }}
        />
        <View>
          <Text style={{ width: "100%", textAlign: "center", padding: 10 }}>
            Lub
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#D9DBE1",
            marginRight: 10
          }}
        />
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.continueButton} onPress={() => {}}>
          <Text style={styles.continueLabel}>Kontynuuj z Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton} onPress={() => {}}>
          <Text style={styles.continueLabel}>Kontynuuj z Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton} onPress={() => {}}>
          <Text style={styles.continueLabel}>Kontynuuj z Apple</Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          width: "80%",
          textAlign: "center",
          marginLeft: 40,
          fontSize: 12
        }}
      >
        Logując się akceptujesz Regulamin Antique Sp. z.o.o.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    alignItems: "center",
    height: 150
  },
  middle: {
    height: 300,
    alignItems: "center"
  },
  bottom: {
    height: 250,
    alignItems: "center"
  },
  continueButton: {
    width: metrics.screenWidth - 48,
    height: 50,
    marginTop: 30,
    borderRadius: 3,
    backgroundColor: "#D9DBE1",
    padding: 10
  },
  loginButton: {
    width: metrics.screenWidth - 48,
    height: 50,
    marginTop: 30,
    borderRadius: 5,
    // backgroundColor: "#18191F",
    backgroundColor: "#21A179",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 8
  },
  continueLabel: {
    fontSize: 20,
    textAlign: "center",
    padding: "auto"
  },
  loginLabel: {
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
  }
});

export default Login;
