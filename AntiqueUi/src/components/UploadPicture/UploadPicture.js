import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { ActionSheet } from 'react-native-cross-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';

import { THUMBNAIL_SIZE, THUMBNAIL_SPACEING } from './consts';
import AddPhotoPlaceholder from "../../assets/images/AddPhotoPlaceholder.png";

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
            width: 300,
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
        <Text style={styles.placeholder}>
          Upload pictures up to 20MB
        </Text>
        <Text style={styles.placeholder}>
          Max 15 pictures
        </Text>
      </TouchableOpacity>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
  },
  thumbnails: {
    width: THUMBNAIL_SIZE,
    height: THUMBNAIL_SIZE,
    marginRight: THUMBNAIL_SPACEING,
    borderRadius: 16,
    position: "relative",
  },
});