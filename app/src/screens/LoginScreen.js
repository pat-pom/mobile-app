import React, {useState, useContext} from 'react';
import {ScrollView, View, Image, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import LogoPng from '../assets/images/logo.png';
import {useTogglePasswordVisibility} from '../hooks/useTogglePasswordVisibility';
import {AuthContext} from '../context/AuthContext';
import {AxiosContext} from '../context/AxiosContext';

import {Input} from '../components/FormComponent/Input';
import {PrimaryButton} from '../components/Buttons';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {passwordVisibility, iconName, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const {publicAxios} = useContext(AxiosContext);
  const {setAuth} = useContext(AuthContext);

  const route = useRoute();
  const navigation = useNavigation();

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleLoginPress = async () => {
    try {
      setIsLoading(true);
      const response = await publicAxios.post('/Auth/Login', {email, password});
      setAuth(response.data);
      resetForm();
      navigation.navigate(route.params.name);
    } catch (err) {
      console.warn(err.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={LogoPng} style={styles.logo} />
      <View style={styles.form}>
        <Input
          iconName="ios-mail-outline"
          placeholder="E-mail address"
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          type="email"
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
          label="Login"
          loading={isLoading}
          onPress={handleLoginPress}
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
    height: 200,
    justifyContent: 'space-between',
  },
});
