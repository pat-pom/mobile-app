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
  Pressable,
} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { Feather } from "react-feather";
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export const Register = () => {
  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Image
          source={require("../assets/images/icon.png")}
          style={{
            width: 80,
            height: 115,
            top: 30,
            marginBottom: 16
          }}
        />
      </View>

      <View style={styles.middle}>
        <TouchableOpacity style={styles.continueButton} onPress={() => {}}>
          <Image 
            source={require("../assets/images/google.png")}
            style={{
              marginRight: 16,
              marginLeft: "auto"
            }}
          />
          <Text style={styles.continueLabel}>Kontynuuj z Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton} onPress={() => {}}>
          <Image 
            source={require("../assets/images/facebook.png")}
            style={{
              marginRight: 16,
              marginLeft: "auto"
            }}
          />
          <Text style={styles.continueLabel}>Kontynuuj z Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton} onPress={() => {}}>
          <Image 
            source={require("../assets/images/apple.png")}
            style={{
              marginRight: 16,
              marginLeft: "auto"
            }}
          />
          <Text style={styles.continueLabel}>Kontynuuj z Apple</Text>
        </TouchableOpacity>
      </View> 

       <View style={{ flexDirection: "row", alignItems: "center", justifyContent:"center" }}>
        <View
          style={{
            height: 1,
            backgroundColor: "#E6EBEA",
            width: metrics.screenWidth - 48,
            zIndex: 0
          }}
        >
          <Text style={{ zIndex: 1,textAlign: "center", backgroundColor: "white", fontSize: 12, lineHeight: 28, fontWeight:"400", fontFamily: "Poppins", color: "#60716A", marginLeft: "auto", marginRight: "auto"}}>
            Lub za pomocą adresu e-mail
          </Text>
          </View> 
      </View> 
      <View style={{ alignItems: "center"}}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={{
                height: 52,
                borderColor: '#969BAB',
                borderWidth: 1,
                borderRadius: 4,
                paddingLeft: 16,
                fontSize: 14,
                fontWeight: "400",
                fontFamily: "Poppins",
                color:'#969BAB',
                marginTop: 32,
                width: metrics.screenWidth - 48,
              }}
              placeholder="E-mail address"
            />
            {/* <Feather name="search" size={16} color="#969BAB" style={styles.inputIcon}/> */}
        </View>
        <View style={styles.inputWrapper}>
            <TextInput
              style={{
                height: 52,
                borderColor: '#969BAB',
                borderWidth: 1,
                borderRadius: 4,
                paddingLeft: 16,
                fontSize: 14,
                fontWeight: "400",
                fontFamily: "Poppins",
                color:'#969BAB',
                marginTop: 16,
                width: metrics.screenWidth - 48,
              }}
              placeholder="***********"
            />
            {/* <Feather name="search" size={16} color="#969BAB" style={styles.inputIcon}/> */}
        </View>
        </View>

        <View style={{alignItems: "center"}}>
          <TouchableOpacity>
          

{/* <CheckBox
  disabled={false}
/> */}
            <Text style={{
                              fontSize: 12,
                              lineHeight: 24,
                              fontWeight: "500",
                              fontFamily: "Poppins",
                              color:'#424D49',
                              marginLeft: 24,
                              marginTop: 8,
            }}>
              Nie pamiętasz hasła?
            </Text>
          </TouchableOpacity> 
        </View>  

      <View style={{alignItems: "center"}}>
      <Pressable style={({pressed}) => [
              {
                backgroundColor: pressed ? '#064F38' : '#21A179',
                height: 52,
                borderRadius: 4,
                fontWeight: "400",
                marginTop: 24,
                width: metrics.screenWidth - 48,
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
            >
            <Text style={styles.text}>Załóz konto</Text>
          </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top:{
    alignItems: "center"
  },

  submit: {
    height: 52,
    borderRadius: 4,
    fontWeight: "400",
    // backgroundColor: "#18191F",
    backgroundColor: "#21A179",
    marginTop: 24,
    width: metrics.screenWidth - 48,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    color: "#fff",
    fontFamily: "Poppins",
  },
  middle: {
    marginTop:32,
    alignItems: "center",
    marginBottom: 24,
  },
  bottom: {
    height: 410,
    alignItems: "center"
  },
  continueButton: {
    marginTop: 16,
    width: metrics.screenWidth - 48,
    borderRadius: 4,
    borderColor: "#E6EBEA",
    borderWidth: 1,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 14,
    paddingTop: 14,
    alignContent: "center",
    flexDirection: "row",
    fontFamily: "Poppins",
    color: "#151E1B",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
  },
  joinButton: {
    width: metrics.screenWidth - 48,
    height: 50,
    marginTop: 30,
    borderRadius: 5,
    // backgroundColor: "#18191F",
    backgroundColor: "#21A179",

    padding: 8
  },
  continueLabel: {
    fontSize: 20,
    textAlign: "center",
    marginRight: "auto"
  },
  joinLabel: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  inputWrapper:{
    flexDirection: "row",
    alignItems: "center"
  },
  inputIcon:{
    position: "relative",
    marginLeft: "auto",
    marginRight: 16,
    marginBottom: -32,
  }
});

export default Register;
