import { ScrollView, StyleSheet, Image, Text, View, Button, SafeAreaView } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';

import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export const Notifications = ({ navigation }) => {
  return (
    <SafeAreaView>
        <ScrollView>
      <View style={styles.notificationWrapperUnread}>
          <Image style={styles.image}/>
          <View style={styles.messageWrapper}>
          <Text style={styles.message}>Twój przdmiot został dodany {"\n"}do ulubionych.</Text>
          <Text style={styles.subMessage}>2 minutes ago</Text>
          </View>
      </View>
      <View style={styles.notificationWrapperUnread}>
          <Image style={styles.image}/>
          <View style={styles.messageWrapper}>
          <Text style={styles.message}>Twój przdmiot został dodany {"\n"}do ulubionych.</Text>
          <Text style={styles.subMessage}>2 minutes ago</Text>
          </View>
      </View>
      <View style={styles.notificationWrapperRead}>
          <Image style={styles.image}/>
          <View style={styles.messageWrapper}>
          <Text style={styles.message}>Twój przdmiot został dodany {"\n"}do ulubionych.</Text>
          <Text style={styles.subMessage}>2 minutes ago</Text>
          </View>
      </View>
      <View style={styles.notificationWrapperRead}>
          <Image style={styles.image}/>
          <View style={styles.messageWrapper}>
          <Text style={styles.message}>Twój przdmiot został dodany {"\n"}do ulubionych.</Text>
          <Text style={styles.subMessage}>2 minutes ago</Text>
          </View>
      </View>
      <View style={styles.notificationWrapperRead}>
          <Image style={styles.image}/>
          <View style={styles.messageWrapper}>
          <Text style={styles.message}>Twój przdmiot został dodany {"\n"}do ulubionych.</Text>
          <Text style={styles.subMessage}>2 minutes ago</Text>
          </View>
      </View>
      <View style={styles.notificationWrapperRead}>
          <Image style={styles.image}/>
          <View style={styles.messageWrapper}>
          <Text style={styles.message}>Twój przdmiot został dodany {"\n"}do ulubionych.</Text>
          <Text style={styles.subMessage}>2 minutes ago</Text>
          </View>
      </View>
      <View style={styles.notificationWrapperRead}>
          <Image style={styles.image}/>
          <View style={styles.messageWrapper}>
          <Text style={styles.message}>Twój przdmiot został dodany {"\n"}do ulubionych.</Text>
          <Text style={styles.subMessage}>2 minutes ago</Text>
          </View>
      </View>
      <View style={styles.notificationWrapperRead}>
          <Image style={styles.image}/>
          <View style={styles.messageWrapper}>
          <Text style={styles.message}>Twój przdmiot został dodany {"\n"}do ulubionych.</Text>
          <Text style={styles.subMessage}>2 minutes ago</Text>
          </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight,
    marginLeft: 24,
    marginRight: 24,
  },
  notificationWrapperUnread: {
      flexDirection: "row",
      backgroundColor: "#F4F5F7",
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 24,
      paddingRight: 24
  },
  notificationWrapperRead: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 24,
    paddingRight: 24
},
  image:{
      width: 80,
      height: 80,
      borderRadius: 4,
      backgroundColor: "#D9DBE1"
  },
  messageWrapper: {
    flexDirection: "column",
    marginLeft: 8
  },
  message: {
      fontSize: 16,
      lineHeight: 24,
      color: "#18191F",
      fontWeight: "400",
      
  },
  subMessage: {
      marginTop: 8,
      color: "#969BAB",
      fontSize: 12,
      lineHeight: 20,
      textTransform: 'uppercase'
  }
});