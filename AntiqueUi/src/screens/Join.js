import React from "react";
import { Button, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export const Join = () => {
  return (
    <View>
      <View style={styles.top}>
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            marginRight: 10,
            marginTop: 50,
            textDecorationLine: "underline"
          }}
          onPress={() => {}}
        >
          <Text style={styles.skip}>SKIP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.btn1} onPress={() => {}}>
          <Text style={styles.napis1}>Chcę dołączyć</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.napis}>Posiadam konto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    height: 580,
    backgroundColor: "#969BAB"
  },
  skip: {
    fontSize: 20
  },
  btn1: {
    width: "100%",
    height: 50,
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: "#18191F",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 6
  },
  btn: {
    width: "100%",
    height: 50,
    marginTop: 30,
    borderRadius: 3,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 6
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
  bottom: {
    padding: 24,
    height: "100%"
  }
});

export default Join;
