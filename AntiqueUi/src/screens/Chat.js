import { StyleSheet, Text, View, Button } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
export const Chat = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});