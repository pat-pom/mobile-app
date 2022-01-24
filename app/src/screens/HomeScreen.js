import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {AxiosContext} from '../context/AxiosContext';

export const HomeScreen = ({navigation}) => {
  const {publicAxios} = useContext(AxiosContext);

  const [product, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    try {
      setIsLoading(true);
      const response = await publicAxios.get('/Product');

      setProducts(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);
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
