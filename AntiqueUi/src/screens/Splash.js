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
    <View>
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
  header: {
    marginLeft: "auto",
    height: metrics.screenHeight - 173,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Splash;
