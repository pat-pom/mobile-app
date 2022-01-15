import React from "react";
import {  Image, StyleSheet, View, SafeAreaView } from "react-native";
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}


export const Splash = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/iconwhite.png")}
          style={styles.icon}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: metrics.screenHeight - 173,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#21A179",
  }
});

export default Splash;
