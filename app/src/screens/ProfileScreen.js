import React, {useEffect, useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>Profile Screen</Text>
    <Button title="Click Here" onPress={() => navigation.navigate('Home')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
