import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from "react-native-image-crop-picker";
import { ActionSheet } from "react-native-cross-actionsheet";

export const  UploadProfilePhoto = ( images,
  setImages,
  maxImages,
  renderDropdownIcon,) => {
  const [image, setImage] = useState(null);
  const addImage=()=>{};
  const openUploadActionSheet = () =>
  ActionSheet.showActionSheetWithOptions(
    {
      title: "Upload profile photo",
      message: "Choose your photo",
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
            <View style={styles.container}>
                {
                    image  && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                }
                    
                    <View style={styles.uploadBtnContainer}>
                        <TouchableOpacity onPress={openUploadActionSheet} style={styles.uploadBtn} >
                            <Feather name="camera" size={16} color="black" style={{marginTop: 6}}/>
                        </TouchableOpacity>
                    </View>
              

            </View>
   
  );
}

const styles = StyleSheet.create({
    container:{
        elevation:2,
        height:112,
        width:112, 
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'25%',


       
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }
})