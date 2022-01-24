import React, {useState, useContext} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';

import {UploadPicture} from '../components/UploadPicture/UploadPicture';
import {Input} from '../components/FormComponent/Input';
import {PrimaryButton} from '../components/Buttons';

import {AuthContext} from '../context/AuthContext';
import {AxiosContext} from '../context/AxiosContext';

const categories = ['Sofy', 'Szafki', 'RTV', 'Meblościanki'];
const stateData = ['nowe', 'uzywane'];

export const AddProductScreen = ({navigation}) => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [state, setState] = useState('');
  const [localization, setLocalization] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {publicAxios} = useContext(AxiosContext);
  const {auth} = useContext(AuthContext);

  const handleAddPress = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();

      images.forEach(image => {
        formData.append(image.filename, {
          uri:
            Platform.OS === 'ios'
              ? image.sourceURL.replace('file://', '')
              : image.sourceURL,
          type: 'image/jpg',
          name: image.filename,
        });
      });

      const dataToSend = {
        title,
        description,
        category,
        price,
        state,
        localization,
        userId: auth.userId,
      };

      const response = await publicAxios.post(
        '/Product',
        {
          formData,
          dataToSend,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      console.warn(response.data);
    } catch (err) {
      console.warn(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <UploadPicture images={images} setImages={setImages} />
      <View>
        <Input
          placeholder="np. Narożnik do salonu"
          label="Tytuł"
          autoCapitalize="none"
          value={title}
          onChangeText={title => setTitle(title)}
        />
        <Input
          placeholder="np. Narożnik do salonu"
          label="Opis"
          autoCapitalize="none"
          value={description}
          multiline={true}
          onChangeText={description => setDescription(description)}
        />
        <View>
          <Text>Kategoria</Text>
          <SelectDropdown
            defaultButtonText="Wybierz kategorię"
            dropdownOverlayColor="rgba(0,0,0,0)"
            dropdownIconPosition="right"
            renderDropdownIcon={isOpened => {
              return (
                <Feather
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#969BAB'}
                  size={16}
                />
              );
            }}
            dropdownStyle={{
              borderColor: '#969BAB',
              borderWidth: 1,
              backgroundColor: '#fff',
              borderRadius: 4,
              marginTop: 8,
            }}
            rowStyle={{
              borderColor: '#969BAB',
              padding: 16,
            }}
            rowTextStyle={{
              fontSize: 14,
              textAlign: 'center',
              fontWeight: '400',
              color: '#000',
              fontFamily: 'Poppins',
            }}
            buttonStyle={{
              height: 52,
              borderColor: '#969BAB',
              borderWidth: 1,
              borderRadius: 4,
              backgroundColor: '#fff',
            }}
            buttonTextStyle={{
              fontSize: 14,
              textAlign: 'left',
              fontWeight: '400',
              color: '#969BAB',
              fontFamily: 'Poppins',
            }}
            data={categories}
            onSelect={(selectedItem, index) => setCategory(selectedItem)}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <Input
          placeholder="Cena"
          label="Cena"
          autoCapitalize="none"
          value={price}
          multiline={true}
          onChangeText={price => setPrice(price)}
        />
        <View>
          <Text>Stan</Text>
          <SelectDropdown
            defaultButtonText="Stan"
            dropdownOverlayColor="rgba(0,0,0,0)"
            dropdownIconPosition="right"
            renderDropdownIcon={isOpened => {
              return (
                <Feather
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#969BAB'}
                  size={16}
                />
              );
            }}
            dropdownStyle={{
              borderColor: '#969BAB',
              borderWidth: 1,
              backgroundColor: '#fff',
              borderRadius: 4,
              marginTop: 8,
            }}
            rowStyle={{
              borderColor: '#969BAB',
              padding: 16,
            }}
            rowTextStyle={{
              fontSize: 14,
              textAlign: 'center',
              fontWeight: '400',
              color: '#000',
              fontFamily: 'Poppins',
            }}
            buttonStyle={{
              height: 52,
              borderColor: '#969BAB',
              borderWidth: 1,
              borderRadius: 4,
              backgroundColor: '#fff',
            }}
            buttonTextStyle={{
              fontSize: 14,
              textAlign: 'left',
              fontWeight: '400',
              color: '#969BAB',
              fontFamily: 'Poppins',
            }}
            data={stateData}
            onSelect={(selectedItem, index) => setState(selectedItem)}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
        <Input
          placeholder="Lokalizacja"
          label="Lokalizacja"
          autoCapitalize="none"
          value={localization}
          multiline={true}
          onChangeText={localization => setLocalization(localization)}
        />
        <PrimaryButton
          label="Dodaj"
          loading={isLoading}
          onPress={handleAddPress}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 24,
  },
});
