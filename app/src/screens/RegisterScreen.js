import React, {useState, useContext} from 'react';
import {View, ScrollView, Image, StyleSheet} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {useRoute} from '@react-navigation/native';

import LogoPng from '../assets/images/logo.png';
import {useTogglePasswordVisibility} from '../hooks/useTogglePasswordVisibility';
import {AuthContext} from '../context/AuthContext';
import {AxiosContext} from '../context/AxiosContext';

import {Input} from '../components/FormComponent/Input';
import {PrimaryButton} from '../components/Buttons';

export const RegisterScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {passwordVisibility, iconName, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const {publicAxios} = useContext(AxiosContext);
  const {setAuth} = useContext(AuthContext);

  const route = useRoute();

  const resetForm = () => {
    setUserName('');
    setEmail('');
    setPassword('');
  };

  const handleRegisterPress = async () => {
    try {
      setIsLoading(true);
      const response = await publicAxios.post('/Auth/Register', {
        userName,
        email,
        password,
      });
      setAuth(response.data);
      resetForm();
      navigation.navigate(route.params.name);
      Snackbar.show({
        text: 'Register successfull',
        duration: Snackbar.LENGTH_SHORT,
      });
    } catch (err) {
      console.warn(err.response.data);
      Snackbar.show({
        text: 'Something went wrong. Try again.',
        duration: Snackbar.LENGTH_SHORT,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={LogoPng} style={styles.logo} />
      <View style={styles.form}>
        <Input
          iconName="ios-person-outline"
          placeholder="User Name"
          value={userName}
          onChangeText={userName => setUserName(userName)}
        />
        <Input
          iconName="ios-mail-outline"
          placeholder="E-mail address"
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <Input
          placeholder="Password"
          autoCapitalize="none"
          type="password"
          iconName={iconName}
          secureTextEntry={passwordVisibility}
          onIconPress={handlePasswordVisibility}
          value={password}
          onChangeText={password => setPassword(password)}
        />
        <PrimaryButton
          label="Register"
          loading={isLoading}
          onPress={handleRegisterPress}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 24,
  },
  logo: {
    width: 80,
    height: 115,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  form: {
    marginTop: 20,
    height: 300,
    justifyContent: 'space-between',
  },
});
