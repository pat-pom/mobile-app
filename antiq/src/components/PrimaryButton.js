import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import {weight, type} from '../theme/fonts'
const width = Dimensions.get('window').width


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
      width: 327,
      borderRadius: 4
    },
    btnTextStyle: {
      color: '#ffffff',
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'center',
      fontFamily: type,
    }
  })
  
  export default PrimaryButton