import React from 'react';

import Geolocation from '@react-native-community/geolocation';

Geolocation.getCurrentPosition(info => console.log(info));


export const Geo = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <Input/>
        <View style={styles.imageTextWrapper}>
        </View>
      </SafeAreaView>
      
    )
  }