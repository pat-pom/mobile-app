import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, Button, FlatList } from 'react-native';
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
            setImages(prevState => [...prevState, ...images]);
          });
        } else if (buttonIndex === 2) {
          ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            setImages(prevState => [...prevState, ...image]);
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
      <FlatList
        horizontal={true}
        data={images}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20
        }}
        keyExtractor={item => item.filename}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              style={styles.thumbnails}
              source={{ uri: item.path }}
            />
          </TouchableOpacity>
        )}
      />
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
  },
  thumbnails: {
    width: 100,
    height: 100,
    marginRight: 5,
    borderRadius: 16,
  }
});