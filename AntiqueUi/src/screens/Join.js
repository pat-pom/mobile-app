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
          style={styles.skip}
          onPress={() => {}}
        >
          <Text>SKIP</Text>
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
    fontSize: 16,
    alignSelf: "flex-end",
    marginRight: 24,
    marginTop: 48,
    textDecorationLine: "underline",
    lineHeight: 24
  },
  btn1: {
    width: metrics.screenWidth - 48,
    // height: 50,
    // marginTop: 30,
    borderRadius: 4,
    backgroundColor: "#18191F",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16
  },
  btn: {
    width: metrics.screenWidth - 48,
    // height: 50,
    // marginTop: 30,
    borderRadius: 4,
    backgroundColor: "white",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16
  },
  napis: {
    fontSize: 16,
    color: "#18191F",
    lineHeight: 28,
    fontWeight: "500",
    textAlign: "center"
  },
  napis1: {
    fontSize: 16,
    color: "white",
    lineHeight: 28,
    fontWeight: "500",
    textAlign: "center"
  },
  bottom: {
    padding: 24,
    height: "100%"
  }
});

export default Join;
