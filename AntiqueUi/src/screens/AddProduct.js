import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';

import { UploadPicture } from '../components/UploadPicture/UploadPicture';
import { formatBytes } from '../helpers/formatBytes';

export const AddProduct = ({ navigation }) => {
  const [images, setImages] = useState([]);

  const validate = () => {
    let errors = {};
    let imageSize = images.reduce((a, b) => a + b.size, 0);

    if (!images.length) {
      errors.image = "Image is required.";
      errors.isValid = false;
    } else if (images.length > 15) {
      errors.image = "Max 15 pictures.";
      errors.isValid = false;
    } else if (formatBytes(imageSize) > 20) {
      errors.image = "Images are to large.";
      errors.isValid = false;
    }

    errors.isValid = true;

    return errors;
  }

  const handleSubmit = () => {
    console.log(validate());
  }

  return (
    <ScrollView style={styles.scrollView}>
      <UploadPicture images={images} setImages={setImages} maxImages={15} errorMessage={validate} />
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  scrollView: {
    margin: 20,
  },
})
