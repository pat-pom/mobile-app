import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export const AddProductScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text>Add Product Screen</Text>
    <Button title="Click Here" onPress={() => alert('Button clicked!')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
