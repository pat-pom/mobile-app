import React, { useState } from 'react';
import { Text, Alert, Button, Platform, ScrollView, StyleSheet, Pressable } from 'react-native';

import { UploadPicture } from '../components/UploadPicture/UploadPicture';
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}
export const AddProduct = ({ navigation }) => {
  const [images, setImages] = useState([]);

  const handleSubmit = () => {
    const formData = new FormData();

    images.forEach(image => {
      formData.append(image.filename, {
        uri: Platform.OS === 'ios' ? image.sourceURL.replace('file://', '') : image.sourceURL,
        type: "image/jpg",
        name: image.filename,
      });
    });

    // TODO: write request whose sending data to backend

  }

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <UploadPicture images={images} setImages={setImages} maxImages={15} />
      <Pressable onPress={handleSubmit} style={styles.submit}>
        <Text style={styles.text}>Dodaj</Text>
      </Pressable>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  scrollView: {
    margin: 20,
  },
  submit: {
    height: 52,
    borderRadius: 4,
    fontWeight: "400",
    backgroundColor: "#18191F",
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
    fontFamily: "Poppins"
  }
})
