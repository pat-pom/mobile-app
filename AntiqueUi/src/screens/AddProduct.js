import React, { useState } from "react";
import {
  TextInput,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from "../config/axios";
import SelectDropdown from "react-native-select-dropdown";

import { UploadPicture } from "../components/UploadPicture/UploadPicture";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
const categories = ["Sofy", "Szafki", "RTV", "Meblościanki"];
const state = ["nowe", "uzywane"];
export const AddProduct = ({ navigation }) => {
  const [images, setImages] = useState([]);
  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      images: [],
      title: "",
      description: "",
      category: "",
      price: "",
      state: "",
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    const imagesData = [];

    console.log(data);

    images.forEach((image) => {
      const imageUrl = `https://antiqueapistorage.blob.core.windows.net/uploads/${image.filename}`;
      formData.append(image.filename, {
        uri:
          Platform.OS === "ios"
            ? image.sourceURL.replace("file://", "")
            : image.sourceURL,
        type: "image/jpg",
        name: image.filename,
      });
      imagesData.push(imageUrl);
    });

    data.images = imagesData;

    // axios
    //   .post(
    //     "https://antique-dev-api.azurewebsites.net/api/create-product",
    //     data
    //   )
    //   .then((res) => console.log(res));
    // axios
    //   .post(
    //     "https://antique-dev-api.azurewebsites.net/api/upload-file",
    //     formData
    //   )
    //   .then((res) => console.log(res));

    // reset();
    // setImages([]);
    // imagesData = [];
  };

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <UploadPicture images={images} setImages={setImages} maxImages={15} />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text style={styles.inputTitle}>Tytuł</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="np. Sofa"
            />
          </>
        )}
        name="title"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text style={styles.inputTitle}>Opis</Text>
            <TextInput
              style={{
                height: 148,
                borderColor: "#969BAB",
                borderWidth: 1,
                borderRadius: 4,
                paddingLeft: 16,
                fontSize: 14,
                fontWeight: "400",
                color: "#969BAB",
                width: metrics.screenWidth - 48,
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Opis"
              multiline={true}
            />
          </>
        )}
        name="description"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text style={styles.inputTitle}>Kategoria</Text>
            <SelectDropdown
              defaultButtonText="Wybierz kategorię"
              dropdownOverlayColor="rgba(0,0,0,0)"
              dropdownIconPosition="right"
              dropdownStyle={{
                borderColor: "#969BAB",
                borderWidth: 1,
                backgroundColor: "#fff",
                borderRadius: 4,
                marginTop: 8,
              }}
              rowStyle={{
                borderColor: "#969BAB",
                padding: 16,
              }}
              rowTextStyle={{
                fontSize: 14,
                textAlign: "center",
                fontWeight: "400",
                color: "#000",
                fontFamily: "Poppins",
              }}
              buttonStyle={{
                height: 52,
                borderColor: "#969BAB",
                borderWidth: 1,
                borderRadius: 4,
                width: metrics.screenWidth - 48,
                backgroundColor: "#fff",
              }}
              buttonTextStyle={{
                fontSize: 14,
                textAlign: "left",
                fontWeight: "400",
                color: "#969BAB",
                fontFamily: "Poppins",
              }}
              data={categories}
              onSelect={(selectedItem, index) =>
                setValue("category", selectedItem)
              }
              buttonTextAfterSelection={(selectedItem, index) => {
                return value;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </>
        )}
        name="category"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text style={styles.inputTitle}>Cena</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Cena"
              keyboardType="numeric"
            />
          </>
        )}
        name="price"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text style={styles.inputTitle}>Kategoria</Text>
            <SelectDropdown
              defaultButtonText="Wybierz kategorię"
              dropdownOverlayColor="rgba(0,0,0,0)"
              dropdownIconPosition="right"
              dropdownStyle={{
                borderColor: "#969BAB",
                borderWidth: 1,
                backgroundColor: "#fff",
                borderRadius: 4,
                marginTop: 8,
              }}
              rowStyle={{
                borderColor: "#969BAB",
                padding: 16,
              }}
              rowTextStyle={{
                fontSize: 14,
                textAlign: "center",
                fontWeight: "400",
                color: "#000",
                fontFamily: "Poppins",
              }}
              buttonStyle={{
                height: 52,
                borderColor: "#969BAB",
                borderWidth: 1,
                borderRadius: 4,
                width: metrics.screenWidth - 48,
                backgroundColor: "#fff",
              }}
              buttonTextStyle={{
                fontSize: 14,
                textAlign: "left",
                fontWeight: "400",
                color: "#969BAB",
                fontFamily: "Poppins",
              }}
              data={state}
              onSelect={(selectedItem, index) =>
                setValue("state", selectedItem)
              }
              buttonTextAfterSelection={(selectedItem, index) => {
                return value;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </>
        )}
        name="state"
      />

      <Pressable onPress={handleSubmit(onSubmit)} style={styles.submit}>
        <Text style={styles.text}>Dodaj</Text>
      </Pressable>
    </ScrollView>
  );
};

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
    fontFamily: "Poppins",
  },
  input: {
    height: 52,
    borderColor: "#969BAB",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 16,
    fontSize: 14,
    //lineHeight: 28,
    fontWeight: "400",
    color: "#969BAB",
    //marginBottom: 40,
    width: metrics.screenWidth - 48,
  },
  inputTitle: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
    fontFamily: "Poppins",
    marginBottom: 8,
  },
});
