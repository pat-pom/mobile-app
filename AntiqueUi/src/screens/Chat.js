import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { BottomNavigation } from "../components/BottomNavigation";
export const Chat = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Chat Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
