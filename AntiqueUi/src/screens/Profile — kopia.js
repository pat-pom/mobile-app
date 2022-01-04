import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
export const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});