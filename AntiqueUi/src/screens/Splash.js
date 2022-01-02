import React from "react";
import {  Image, StyleSheet, View } from "react-native";
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}


export const Splash = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: metrics.screenWidth-48
  },
  header: {
    padding: 20
  },
  icon: {
    width: 126,
    height: 173,
    top: 319
  }
});

export default Splash;
