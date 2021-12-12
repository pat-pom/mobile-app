import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { weight, type } from './src/theme/fonts';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome! This is antiq project.</Text>
      <StatusBar style="auto" />
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
    fontWeight: weight.bold,
  },
});
