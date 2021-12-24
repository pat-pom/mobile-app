import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { ActionSheet } from 'react-native-cross-actionsheet';

import AddPhotoPlaceholder from "../assets/images/AddPhotoPlaceholder.png";

export const AddProduct = () => {
  const openActionSheet = () =>
    ActionSheet.showActionSheetWithOptions(
      {
        options: ["Cancel", "Choose from library", "Take a picture"],
        cancelButtonIndex: 0,
        userInterfaceStyle: 'light'
      },
      buttonIndex => {
        if (buttonIndex === 1) {
          alert(buttonIndex)
        } else if (buttonIndex === 2) {
          alert(buttonIndex)
        }
      }
    );

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer} onPress={openActionSheet}>
          <Image style={styles.image} source={AddPhotoPlaceholder} />
          <Text style={styles.placeholder}>
            Prześlij JPG, JPEG, PNG or HEIC do 10MB
          </Text>
        </TouchableOpacity>
      </View>
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