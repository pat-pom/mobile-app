import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
//import fonts from './src/theme/fonts'
import Container from './src/containers/Container';
import PrimaryButton from './src/components/PrimaryButton';
<<<<<<< HEAD
<<<<<<< HEAD
import SecondaryButton from './src/components/SecondaryButton';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Container>
            <Text>Welcome! This is antiq project.</Text>
            <StatusBar style="auto" />
            <PrimaryButton text='Chcę dołączyć'/>
            <SecondaryButton text='Posiadam konto'/>
        </Container>
      </SafeAreaView>
    </NavigationContainer>
=======
=======
>>>>>>> parent of df7492a (Primary & Secondary button styles)

export default function App() {
  return (
    <SafeAreaView>
      <Container>
          <Text>Welcome! This is antiq project.</Text>
          <StatusBar style="auto" />
          <PrimaryButton text='PrimaryButton'/>
      </Container>
    </SafeAreaView>
>>>>>>> parent of df7492a (Primary & Secondary button styles)
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
