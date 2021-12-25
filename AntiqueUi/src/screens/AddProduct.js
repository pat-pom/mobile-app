import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { UploadPicture } from '../components/UploadPicture/UploadPicture';

export const AddProduct = () => {
  const [images, setImages] = useState([]);

  return (
    <ScrollView style={styles.scrollView}>
      <UploadPicture images={images} setImages={setImages} maxImages={15} />
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  scrollView: {
    margin: 20,
  },
})
