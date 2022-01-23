import React, {useState} from 'react';
import {ScrollView, View, Image, StyleSheet} from 'react-native';

import LogoPng from '../assets/images/logo.png';
import {useTogglePasswordVisibility} from '../hooks/useTogglePasswordVisibility';

import {Input} from '../components/FormComponent/Input';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {passwordVisibility, iconName, handlePasswordVisibility} =
    useTogglePasswordVisibility();

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
    height: 120,
    justifyContent: 'space-between',
  },
});
