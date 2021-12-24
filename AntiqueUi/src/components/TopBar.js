import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';

export const TopBar = ({ viewName }) => {
  return (
    <View style={styles.container}>
      <Icon name="arrowleft" size={30} />
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