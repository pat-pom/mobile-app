import Constants from 'expo-constants';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

import { TopBar } from './components/TopBar';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <TopBar />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
  }
});
