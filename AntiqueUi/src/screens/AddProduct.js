import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { ActionSheet } from 'react-native-cross-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';

import AddPhotoPlaceholder from "../assets/images/AddPhotoPlaceholder.png";

export const AddProduct = () => {
  const [images, setImages] = useState([]);

  const openActionSheet = () =>
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
          }).then(images => {
            setImages(images);
          });
        } else if (buttonIndex === 2) {
          ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            setImages(image)
          });
        }
      }
    );

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer} onPress={openActionSheet}>
          <Image style={styles.image} source={AddPhotoPlaceholder} />
          <Text style={styles.placeholder}>
            Upload JPG, JPEG, PNG or HEIC up to 10MB
          </Text>
        </TouchableOpacity>
      </View>
      {images.map(image => (
        <Image style={{
          width: 51,
          height: 51,
          resizeMode: 'contain'
        }} key={image.localIdentifier} source={{ uri: image.path }} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    height: 50,
    width: 50,
  },
  placeholder: {
    color: '#cccccc',
    fontFamily: "Poppins",
    marginTop: 5
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    paddingTop: 50,
    paddingBottom: 50,
    borderRadius: 5,
    borderColor: '#cccccc',
  }
});