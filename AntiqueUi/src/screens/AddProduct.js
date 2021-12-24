import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';

import AddPhotoPlaceholder from "../assets/images/AddPhotoPlaceholder.png";

export const AddProduct = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer} onPress={() => alert("Works")}>
          <Image style={styles.image} source={AddPhotoPlaceholder} />
          <Text style={styles.placeholder}>
            Upload JPG, JPEG, PNG or HEIC up to 10MB
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