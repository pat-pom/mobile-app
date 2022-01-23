import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export const PrimaryButton = ({onPress, loading, label, loadingText = ''}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      {loading && <ActivityIndicator size="large" color="#fff" />}
      <Text style={styles.text}>{loading ? loadingText : label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#18191F',
    height: 52,
    borderRadius: 4,
    fontWeight: '400',
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: '#fff',
    fontFamily: 'Poppins',
  },
});
