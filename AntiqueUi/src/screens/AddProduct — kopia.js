import React, { useState } from 'react';
import { Alert, Button, Platform, ScrollView, StyleSheet } from 'react-native';

import { UploadPicture } from '../components/UploadPicture/UploadPicture';

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
    <ScrollView style={styles.scrollView}>
      <UploadPicture images={images} setImages={setImages} maxImages={15} />
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  scrollView: {
    margin: 20,
  },
})
