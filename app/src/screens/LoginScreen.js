import React, {useState} from 'react';
import {ScrollView, View, Image, StyleSheet} from 'react-native';

import LogoPng from '../assets/images/logo.png';
import {useTogglePasswordVisibility} from '../hooks/useTogglePasswordVisibility';

import {Input} from '../components/FormComponent/Input';
import {PrimaryButton} from '../components/Buttons';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {passwordVisibility, iconName, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const handleLoginPress = () => {
    setIsLoading(!isLoading);
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
