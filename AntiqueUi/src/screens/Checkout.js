import React from "react";
import { ScrollView, Image, Keyboard, TouchableOpacity, StyleSheet, Text, View, Button, TextInput, SafeAreaView, Pressable } from "react-native";
import { Dimensions } from 'react-native';
import { Feather } from "react-feather";
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export const Checkout = () => {
  return (
    <SafeAreaView style={styles.container}>
        
        <Image style={styles.image}/>
            <View style={styles.header}>
                <View style={styles.data}>
                    <Text style={styles.title}>Zamówienie</Text>
                    <Text style={styles.title}>15,00 zł</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.title}>Wysyłka</Text>
                    <Text style={styles.title}>7,90 zł</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.title}>Dodatkowe opłaty</Text>
                    <Text style={styles.title}>00,00 zł</Text>
                </View>
                <View style={styles.dataBig}>
                    <Text style={styles.titleBold}>Suma</Text>
                    <Text style={styles.titleBold}>22,90 zł</Text>
                </View>
            </View>
            <View style={styles.divider}/>
                <Text style={styles.title}>Kupujący</Text>
                <View style={styles.buyer}>
                    <Image style={styles.photo}/>
                    <Text style={styles.title}>Jan Kowalski</Text>
                </View>
            <View style={styles.divider}/>
                <Text style={styles.title}>Płatnośc</Text>
                    <View style={styles.filtersWrapper}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                            <TouchableOpacity style={styles.filterWrapper}>
                                <Text style={styles.filterText}>Apple Pay</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.filterWrapper}>
                                <Text style={styles.filterText}>Dotpay</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.filterWrapper}>
                                <Text style={styles.filterText}>Online Pay</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.filterWrapper}>
                                <Text style={styles.filterText}>Credit Card</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
            <View style={styles.divider}/>
                <Text style={styles.title}>Dostawa</Text>
                            <View style={styles.filtersWrapper}>
                                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                    <TouchableOpacity style={styles.filterWrapper}>
                                        <Text style={styles.filterText}>Inpost</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.filterWrapper}>
                                        <Text style={styles.filterText}>Dostawa własna</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
        <Pressable style={styles.submit}>
        <Text style={styles.text}>Dodaj</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        height: metrics.screenHeight,
        marginLeft: 24,
        marginRight: 24,
      },
      header: {
        flexDirection: "column",
        paddingTop: 16,
      },
      title:{
        fontSize: 14,
        lineHeight: 28,
        color: "#474A57",
        fontFamily:"Poppins"
      },
      buyer:{
        marginTop: 16,
        flexDirection: "row"
      },
      image:{
        backgroundColor: "#D9DBE1",
        height:195,
        width: metrics.screenWidth,
        position: "relative",
        left: -24,
      },
      photo:{
        width: 32,
        height: 32,
        marginRight: 8,
        borderRadius: 32,
        backgroundColor: "#D9DBE1"
      },
    divider: {
        marginTop: 16,
        marginBottom: 16,
        height: 1,
        width: metrics.screenWidth - 48 ,
        backgroundColor: "#D9DBE1"
      },
      data:{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
      },
      dataBig:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
    },
      titleBold:{
          fontSize: 14,
          lineHeight: 28,
          color: "#18191F",
          fontFamily:"Poppins",
          fontWeight: "600"
    },
  
    filterIcon:{
      marginRight: 8,
    },
    filtersWrapper: {
        marginTop: 8,
        flexDirection: "row"
    },
    filterWrapper:{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#D9DBE1",
        paddingBottom: 6,
        paddingTop: 6,
        paddingLeft: 8,
        paddingRight: 8,
        marginRight: 8,
    },
    filterText: {
        color: "#969BAB",
        fontSize: 12,
        lineHeight: 20,
        textTransform: 'uppercase',
        fontWeight: "500"
    },
    submit: {
      height: 52,
      borderRadius: 4,
      fontWeight: "400",
      // backgroundColor: "#18191F",
      backgroundColor: "#21A179",
      marginTop: 32,
      width: metrics.screenWidth - 48,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: "500",
      color: "#fff",
      fontFamily: "Poppins"
    }
});

export default Checkout;
