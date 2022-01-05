import { ScrollView, Keyboard, TouchableOpacity, StyleSheet, Text, View, Button, TextInput, SafeAreaView, Pressable } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
import { Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const {width, height} = Dimensions.get('window');
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

export const Filters = ({ navigation }) => {

  return (
      
      <View style={styles.filtersWrapper}>
         
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.filterWrapper}>
            <Feather name="filter" size={12} color="#969BAB" style={styles.filterIcon}/>
            <Text style={styles.filterText}>Filtruj</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterWrapper}>
            <Text style={styles.filterText}>Stan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterWrapper}>
            <Text style={styles.filterText}>Cena</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterWrapper}>
            <Text style={styles.filterText}>Lokalizacja</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterWrapper}>
            <Text style={styles.filterText}>Sortuj</Text>
          </TouchableOpacity>  
          </ScrollView>
          
        </View>
      
  )
}

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight,
    marginLeft: 24,
    marginRight: 24,
  },
  filterIcon:{
    marginRight: 8,
  },
  filtersWrapper: {
      marginTop: 24,
      marginBottom: 32,
      flexDirection: "row"
  },
  filterWrapper:{
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 4,
      borderWidth: 1,
      borderColor: "#D9DBE1",
      paddingBottom: 6,
      paddingTop: 6,
      paddingLeft: 8,
      paddingRight: 8,
      marginRight: 8,
  },
  filterText: {
      color: "#969BAB",
      fontSize: 12,
      lineHeight: 20,
      textTransform: 'uppercase',
      fontWeight: "500"
  }
});

export default Filters