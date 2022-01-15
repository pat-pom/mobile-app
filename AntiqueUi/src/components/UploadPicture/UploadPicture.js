import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  View,
  ScrollViewComponent,
} from "react-native";
import { ActionSheet } from "react-native-cross-actionsheet";
import ImagePicker from "react-native-image-crop-picker";
import SelectDropdown from "react-native-select-dropdown";
import { THUMBNAIL_SIZE, THUMBNAIL_SPACEING } from "./consts";
import AddPhotoPlaceholder from "../../assets/images/AddPhotoPlaceholder.png";
import { Dimensions } from "react-native";
import { Feather } from "react-feather";
const { width, height } = Dimensions.get("window");
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
const categories = ["Sofy", "Szafki", "RTV", "Meblościanki"];
export const UploadPicture = ({
  images,
  setImages,
  maxImages,
  renderDropdownIcon,
}) => {
  const openUploadActionSheet = () =>
    ActionSheet.showActionSheetWithOptions(
      {
        title: "Upload photos",
        message: "Choose your item pictures",
        options: ["Cancel", "Choose from library", "Take a picture"],
        cancelButtonIndex: 0,
        userInterfaceStyle: "light",
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          ImagePicker.openPicker({
            multiple: true,
            maxFiles: maxImages,
          }).then((images) => {
            setImages((prevState) => [...prevState, ...images]);
          });
        } else if (buttonIndex === 2) {
          ImagePicker.openCamera({
            width: 400,
            height: 400,
            cropping: true,
            includeBase64: true,
            maxFiles: maxImages,
          }).then((image) => {
            setImages((prevState) => [...prevState, ...image]);
          });
        }
      }
    );

  const openDeleteActionSheet = (pictureIndex) =>
    ActionSheet.showActionSheetWithOptions(
      {
        options: ["Cancel", "Delete"],
        cancelButtonIndex: 0,
        userInterfaceStyle: "light",
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          setImages(images.filter((image, index) => index !== pictureIndex));
        }
      }
    );

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={openUploadActionSheet}
      >
        <Image style={styles.image} source={AddPhotoPlaceholder} />
      </TouchableOpacity>
      <Text style={styles.placeholder}>*maksymalnie 15 zdjęć</Text>
      <FlatList
        horizontal={true}
        data={images}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10,
        }}
        keyExtractor={(item) => item.filename + Math.random()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => openDeleteActionSheet(index)}
          >
            <Image style={styles.thumbnails} source={{ uri: item.path }} />
          </TouchableOpacity>
        )}
      />
      {/* <Text style={styles.inputTitle}>Tytuł</Text>
      <TextInput
        style={{
          height: 52,
          borderColor: '#969BAB',
          borderWidth: 1,
          borderRadius: 4,
          paddingLeft: 16,
          fontSize: 14,
          //lineHeight: 28,
          fontWeight: "400",
          color:'#969BAB',
          //marginBottom: 40,
          width: metrics.screenWidth - 48,
        }}
        placeholder="np. Sofa"
      />
            <Text style={styles.inputTitle}>Opis</Text>
      <TextInput
        style={{
          height: 148,
          borderColor: '#969BAB',
          borderWidth: 1,
          borderRadius: 4,
          paddingLeft: 16,
          paddingBottom: "auto",
          fontSize: 14,
          //lineHeight: 28,
          fontWeight: "400",
          color:'#969BAB',
          //marginBottom: 40,
          width: metrics.screenWidth - 48,
        }}
        placeholder="Opis"
      />
      <Text style={styles.placeholder}>
          0/500
      </Text>
      <Text style={styles.inputTitle}>Kategoria</Text>
  
      <SelectDropdown
              // renderDropdownIcon={(isOpened) => {
              //   return (
              //     <Feather
              //       name={isOpened ? "chevron-up" : "chevron-down"}
              //       color={"#444"}
              //       size={18}
              //     />
              //   );
              // }}
      defaultButtonText="Wybierz kategorię"
      dropdownOverlayColor="rgba(0,0,0,0)"
      dropdownIconPosition="right"
      dropdownStyle={{
        borderColor: '#969BAB',
        borderWidth: 1,
        backgroundColor: "#fff",
        borderRadius: 4,
        marginTop: 8,
      }}
      rowStyle={{
        borderColor: '#969BAB',
        padding: 16,
      }}
      rowTextStyle={{
        fontSize: 14,
        textAlign: "center",
        fontWeight: "400",
        color:'#000',
        fontFamily:"Poppins"
      }}
      buttonStyle={{
        height: 52,
        borderColor: '#969BAB',
        borderWidth: 1,
        borderRadius: 4,
        width: metrics.screenWidth - 48,
        backgroundColor: "#fff"
      }}
        buttonTextStyle={{
                fontSize: 14,
                textAlign: "left",
                fontWeight: "400",
                color:'#969BAB',
                fontFamily:"Poppins"
              }}
      data={categories}
      onSelect={(selectedItem, index) => {

      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item
      }}
    />
      <Text style={styles.inputTitle}>Cena</Text>
      <TextInput
        style={{
          height: 52,
          borderColor: '#969BAB',
          borderWidth: 1,
          borderRadius: 4,
          paddingLeft: 16,
          fontSize: 14,
          //lineHeight: 28,
          fontWeight: "400",
          color:'#969BAB',
          //marginBottom: 40,
          width: metrics.screenWidth - 48,
        }}
        placeholder="Cena"
      />
      <Text style={styles.inputTitle}>Cena</Text>
      <TextInput
        style={{
          height: 52,
          borderColor: '#969BAB',
          borderWidth: 1,
          borderRadius: 4,
          paddingLeft: 16,
          fontSize: 14,
          //lineHeight: 28,
          fontWeight: "400",
          color:'#969BAB',
          //marginBottom: 40,
          fontFamily: "Poppins",
          width: metrics.screenWidth - 48,
        }}
        placeholder="Cena"
      />
      <Text style={styles.inputTitle}>Lokalizacja</Text>
      <TextInput
        style={{
          height: 52,
          borderColor: '#969BAB',
          borderWidth: 1,
          borderRadius: 4,
          paddingLeft: 16,
          fontSize: 14,
          //lineHeight: 28,
          fontWeight: "400",
          color:'#969BAB',
          //marginBottom: 40,
          width: metrics.screenWidth - 48,
        }}
        placeholder="Cena"
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 48,
    width: 48,
  },
  placeholder: {
    color: "#969BAB",
    fontFamily: "Poppins",
    marginTop: 8,
    fontSize: 11,
    lineHeight: 16,
    alignSelf: "flex-end",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 24,
    width: metrics.screenWidth - 40,
    height: 176,
    borderRadius: 4,
    borderColor: "#969BAB",
  },
  thumbnails: {
    width: THUMBNAIL_SIZE,
    height: THUMBNAIL_SIZE,
    marginRight: THUMBNAIL_SPACEING,
    borderRadius: 4,
    position: "relative",
  },
  inputTitle: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
    fontFamily: "Poppins",
    marginBottom: 8,
  },
});
