import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Image, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { ActionSheet } from 'react-native-cross-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';

import { THUMBNAIL_SIZE, THUMBNAIL_SPACEING } from './consts';
import AddPhotoPlaceholder from "../../assets/images/AddPhotoPlaceholder.png";
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export const UploadPicture = ({ images, setImages, maxImages }) => {
  const openUploadActionSheet = () =>
    ActionSheet.showActionSheetWithOptions(
      {
        title: "Upload photos",
        message: "Choose your item pictures",
        options: ["Cancel", "Choose from library", "Take a picture"],
        cancelButtonIndex: 0,
        userInterfaceStyle: 'light'
      },
      buttonIndex => {
        if (buttonIndex === 1) {
          ImagePicker.openPicker({
            multiple: true,
            maxFiles: maxImages,
          }).then(images => {
            setImages(prevState => [...prevState, ...images]);
          });
        } else if (buttonIndex === 2) {
          ImagePicker.openCamera({
            width: 400,
            height: 400,
            cropping: true,
            includeBase64: true,
            maxFiles: maxImages,
          }).then(image => {
            setImages(prevState => [...prevState, ...image]);
          });
        }
      }
    );

  const openDeleteActionSheet = (pictureIndex) =>
    ActionSheet.showActionSheetWithOptions(
      {
        options: ["Cancel", "Delete"],
        cancelButtonIndex: 0,
        userInterfaceStyle: 'light'
      },
      buttonIndex => {
        if (buttonIndex === 1) {
          setImages(images.filter((image, index) => index !== pictureIndex));
        }
      }
    );

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.imageContainer} onPress={openUploadActionSheet}>
        <Image style={styles.image} source={AddPhotoPlaceholder} />
      </TouchableOpacity>
      <Text style={styles.placeholder}>
          *maksymalnie 15 zdjęć
      </Text>
      <FlatList
        horizontal={true}
        data={images}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10
        }}
        keyExtractor={item => item.filename + Math.random()}
        renderItem={({ item, index }) => (
          <TouchableOpacity activeOpacity={0.9} onPress={() => openDeleteActionSheet(index)}>
            <Image
              style={styles.thumbnails}
              source={{ uri: item.path }}
            />
          </TouchableOpacity>
        )}
      />
      <Text style={styles.inputTitle}>Tytuł</Text>
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
      <Text style={styles.inputTitle}>Kategoria</Text>
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
        placeholder="Kategoria"
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
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 48,
    width: 48,
  },
  placeholder: {
    color: '#969BAB',
    fontFamily: "Poppins",
    marginTop: 8,
    fontSize: 11,
    lineHeight: 16,
    alignSelf: 'flex-end'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 24,
    width: metrics.screenWidth - 40,
    height: 176,
    borderRadius: 4,
    borderColor: '#969BAB',
  },
  thumbnails: {
    width: THUMBNAIL_SIZE,
    height: THUMBNAIL_SIZE,
    marginRight: THUMBNAIL_SPACEING,
    borderRadius: 4,
    position: "relative",
  },
  inputTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
    fontFamily: "Poppins",
    marginBottom: 8
  }
});