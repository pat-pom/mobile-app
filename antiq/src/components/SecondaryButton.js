import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
//import fonts from '../theme/fonts'
import metrics from '../theme/metrics'


const SecondaryButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.ContainerStyle}>
        <Text style={styles.TextStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    ContainerStyle: {
      backgroundColor: '#fff',
      paddingVertical: 14,
      paddingHorizontal: 16,
      width: metrics.screenWidth - 48,
      borderRadius: 4,
      borderWidth: 2,
      marginTop: 16,
    },
    TextStyle: {
      color: '#18191F',
      fontSize: 16,
      lineHeight: 28,
      textAlign: 'center',
      fontWeight: '500',
    }
  })
  
  export default SecondaryButton