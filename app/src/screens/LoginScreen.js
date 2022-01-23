import React, {useState} from 'react';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native';

import LogoPng from '../assets/images/logo.png';

import {Input} from '../components/FormComponent/Input';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Image source={LogoPng} style={styles.logo} />
      <View style={styles.form}>
        <Input
          iconName="ios-mail-outline"
          placeholder="E-mail address"
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          value={email}
          onChangeText={email => setEmail(email)}
        />
      </View>
    </SafeAreaView>
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
  },
});
