import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
//import fonts from './src/theme/fonts'
import Container from './src/containers/Container';
import PrimaryButton from './src/components/PrimaryButton';
import SecondaryButton from './src/components/SecondaryButton';

export default function App() {
  return (
    <SafeAreaView>
      <Container>
          <Text>Welcome! This is antiq project.</Text>
          <StatusBar style="auto" />
          <PrimaryButton text='Chcę dołączyć'/>
          <SecondaryButton text='Posiadam konto'/>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
