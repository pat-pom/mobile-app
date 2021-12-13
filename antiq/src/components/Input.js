import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
//import fonts from '../theme/fonts'
import metrics from '../theme/metrics'


const Input = ({ text, onPress }) => {
  return (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
    />
  )
}

const styles = StyleSheet.create({
    ContainerStyle: {
      backgroundColor: '#18191F',
      paddingVertical: 14,
      paddingHorizontal: 16,
      width: metrics.screenWidth - 48,
      borderRadius: 4
    },
    TextStyle: {
      color: '#fff',
      fontSize: 16,
      lineHeight: 28,
      textAlign: 'center',
      fontWeight: '500',
    }
  })
  
  export default Input