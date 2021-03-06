import React from "react";
import { Button, StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from "react-native";
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export const Join = () => {
  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Image
          source={require("../assets/images/wallpaper.png")}
          style={{
            alignSelf: 'center',
            height: 580,
            width: 375,
          }}
        />

        <TouchableOpacity
          style={styles.skip}
          onPress={() => {}}
        >
          <Text>SKIP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>

      <Pressable style={({pressed}) => [
              {
                backgroundColor: pressed ? '#064F38' : '#21A179',
                width: metrics.screenWidth - 48,
                borderRadius: 4,
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 16,
                paddingRight: 16
              },
            ]}
            >
            <Text style={styles.joinText}>Chcę dołączyć</Text>
          </Pressable>

        {/* <TouchableOpacity style={styles.joinButton} onPress={() => {}}>
          <Text style={styles.joinText}>Chcę dołączyć</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.accountButton} onPress={() => {}}>
          <Text style={styles.accountText}>Posiadam konto</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    lineHeight: 24,
    color: "white"
  },
  joinButton: {
    width: metrics.screenWidth - 48,
    borderRadius: 4,
    // backgroundColor: "#18191F",
    backgroundColor: "#21A179",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16
  },
  accountButton: {
    width: metrics.screenWidth - 48,
    borderRadius: 4,
    backgroundColor: "white",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16
  },
  accountText: {
    fontSize: 16,
    color: "#18191F",
    lineHeight: 28,
    fontWeight: "500",
    textAlign: "center"
  },
  joinText: {
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
