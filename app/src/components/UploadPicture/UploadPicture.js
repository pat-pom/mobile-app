import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import {ActionSheetCustom as ActionSheet} from 'react-native-custom-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';

import AddPhotoPlaceholder from '../../assets/images/add-photo.png';
import {MAX_IMAGES_TO_PICK, THUMBNAIL_SIZE, THUMBNAIL_SPACEING} from './consts';

export const UploadPicture = ({images, setImages}) => {
  const openActionSheet = () => {
    actionSheet.show();
  };

  const getActionSheetRef = ref => (actionSheet = ref);
  const handlePress = index => {
    if (index === 1) {
      ImagePicker.openPicker({
        multiple: true,
        maxFiles: MAX_IMAGES_TO_PICK,
      }).then(images => {
        setImages(prevState => [...prevState, ...images]);
      });
    } else if (index === 2) {
      ImagePicker.openCamera({
        width: 400,
        height: 400,
        cropping: true,
        includeBase64: true,
        maxFiles: MAX_IMAGES_TO_PICK,
      }).then(image => {
        setImages(prevState => [...prevState, ...image]);
      });
    }
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.uploadPictureContainer}
        onPress={openActionSheet}>
        <Image style={styles.imagePlaceholder} source={AddPhotoPlaceholder} />
      </TouchableOpacity>
      <Text style={styles.placeholder}>*maksymalnie 15 zdjęć</Text>
      <FlatList
        horizontal={true}
        data={images}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10,
        }}
        keyExtractor={item => item.filename + Math.random()}
        renderItem={({item, idx}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              setImages(images.filter((image, index) => index !== idx))
            }>
            <Image style={styles.thumbnails} source={{uri: item.path}} />
          </TouchableOpacity>
        )}
      />
      <ActionSheet
        ref={getActionSheetRef}
        title="Upload photos"
        message="Choose your item pictures"
        options={['Cancel', 'Choose from library', 'Take a picture']}
        cancelButtonIndex={0}
        onPress={handlePress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  uploadPictureContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 24,
    height: 176,
    borderRadius: 4,
    borderColor: '#969BAB',
  },
  imagePlaceholder: {
    height: 48,
    width: 48,
  },
  placeholder: {
    color: '#969BAB',
    fontFamily: 'Poppins',
    marginTop: 8,
    fontSize: 11,
    lineHeight: 16,
    alignSelf: 'flex-end',
  },
  thumbnails: {
    width: THUMBNAIL_SIZE,
    height: THUMBNAIL_SIZE,
    marginRight: THUMBNAIL_SPACEING,
    borderRadius: 4,
    position: 'relative',
  },
});
