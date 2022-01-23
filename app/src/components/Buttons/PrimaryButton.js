import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export const PrimaryButton = ({
  onPress,
  loading,
  label,
  loadingText = '',
  outline,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={outline ? styles.outlineButton : styles.button}>
      {loading && <ActivityIndicator size="large" color="#fff" />}
      <Text style={outline ? styles.outlineText : styles.text}>
        {loading ? loadingText : label}
      </Text>
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
  outlineButton: {
    borderColor: '#969BAB',
    borderWidth: 1,
    borderRadius: 4,
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
  outlineText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: '#000',
    fontFamily: 'Poppins',
  },
});
