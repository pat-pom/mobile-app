import { StyleSheet, Text, View, Button } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
export const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});