import React from "react";
import { Button, StyleSheet, View, TouchableOpacity, Text, SafeAreaView , FlatList, Image} from "react-native";
import { Dimensions } from 'react-native';
import { Chat } from "./Chat";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

const Stack = createNativeStackNavigator();

const msg = [
    {
      id: '1',
      userName: 'Jenny Doe',
     // userImg: require('../assets/users/user-3.jpg'),
      messageTime: '4 mins ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '2',
      userName: 'John Doe',
      //userImg: require('../assets/users/user-1.jpg'),
      messageTime: '2 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '3',
      userName: 'Ken William',
      //userImg: require('../assets/users/user-4.jpg'),
      messageTime: '1 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '4',
      userName: 'Selina Paul',
      //userImg: require('../assets/users/user-6.jpg'),
      messageTime: '1 day ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '5',
      userName: 'Christy Alex',
      //userImg: require('../assets/users/user-7.jpg'),
      messageTime: '2 days ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
  ];

export const Messages = ({navigation}) => {
    return (
      <View>
          <FlatList 
          data={msg}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.notificationWrapperUnread} onPress={() => navigation.navigate("Chat")}>
                <Image style={styles.image}/>
                <View style={styles.messageWrapper}>
                    <Text style={styles.message}>{item.userName} wysłała wiadomość {'\n'} w sprawie Twojego przedmiotu</Text>
                    <Text style={styles.subMessage}>{item.messageTime}</Text>
                </View>
            </TouchableOpacity>
          )}/>

          
      </View>
    );
  }


  
  const styles = StyleSheet.create({
    container: {
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "center"
    // }
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
  