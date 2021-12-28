import { StyleSheet, Text, View, Button } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Add Product"
        onPress={() => navigation.navigate('AddProduct')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});