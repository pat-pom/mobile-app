import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {AuthContext} from '../context/AuthContext';

export const HomeScreen = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Click Here" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
