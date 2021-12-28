import { StyleSheet, Text, View, Button } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
export const Search = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});