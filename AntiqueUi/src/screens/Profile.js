import { Image, StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}


export const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image style={styles.image}/>
        <Text style={styles.name}>Jan Kowalski</Text>
      </View>
      <View style={styles.menuWrapper}>
        <Text style={styles.menuItem}>Moje Profil</Text>
        <View style={styles.divider}/>
        <Text style={styles.menuItem}>Moje Zamówienia</Text>
      </View>
      <View style={styles.SecondMenuWrapper}>
        <Text style={styles.menuItem}>Ustawienia aplikacji</Text>
        <View style={styles.divider}/>
        <Text style={styles.menuItem}>O nas</Text>
        <View style={styles.divider}/>
        <Text style={styles.menuItem}>Centrum Pomocy</Text>
        <View style={styles.divider}/>
        <Text style={styles.menuItem}>Kontakt</Text>
        <View style={styles.divider}/>
        <Text style={styles.menuItem}>Regulamin</Text>
      </View>

      <View style={styles.logout}>
        <Text  style={styles.logoutButton}>Wyloguj Się</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight,
    marginLeft: 24,
    marginRight: 24,
  },
  profileWrapper:{
    marginTop: 32,
    flexDirection: "column",
    alignItems: "center"
  },
  image: {
    width: 112,
    height: 112,
    backgroundColor: "#D9DBE1",
    borderRadius: 100
  },
  name: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 24,
    color: "#18191F",
    fontFamily: "Poppins"
  },
  menuWrapper: {
    marginTop: 48,
  },
  SecondMenuWrapper: {
    marginTop: 24,
  },
  menuItem: {
    fontSize: 14,
    lineHeight: 28,
    color: "#18191F",
    fontFamily: "Poppins",
  },
  divider: {
    marginTop: 8,
    marginBottom: 8,
    height: 1,
    width: metrics.screenWidth - 48 ,
    backgroundColor: "#D9DBE1"
  },
  logout:{
    marginTop: 24,
    alignItems: "center"
  },
  logoutButton: {
    color: "#18191F",
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "500"
  }
});