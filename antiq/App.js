import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { weight, type } from './src/theme/fonts';

import PrimaryButton from './src/components/PrimaryButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome! This is antiq project.</Text>
      <StatusBar style="auto" />
      <PrimaryButton text='PrimaryButton'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins',
    fontSize: 24,
    // fontWeight: weight.bold,
  },
});
