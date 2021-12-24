import { StyleSheet, Text, View, Button } from 'react-native';

export const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Add Product"
        onPress={() => navigation.navigate('AddProduct')}
      />
    </View>
  )
}