import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

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