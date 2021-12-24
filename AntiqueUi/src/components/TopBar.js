import { StyleSheet, Text, View } from "react-native"

export const TopBar = ({ viewName }) => {
  return (
    <View style={styles.container}>
      <Text>Left</Text>
      <Text style={styles.title}>{viewName}</Text>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins',
  }
});