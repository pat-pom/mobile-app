import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
//import fonts from '../theme/fonts'
import metrics from '../theme/metrics'


const PrimaryButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btnContainerStyle: {
      backgroundColor: '#18191F',
      paddingVertical: 14,
      paddingHorizontal: 16,
      width: metrics.screenWidth,
      borderRadius: 4
    },
    btnTextStyle: {
      color: '#ffffff',
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'center',
      //fontWeight: fonts.weight.bold,
    }
  })
  
  export default PrimaryButton