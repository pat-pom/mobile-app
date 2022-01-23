import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {Icon} from '../Icon';

export const Input = ({
  iconName,
  placeholder,
  value,
  onChangeText,
  ...rest
}) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
      {iconName && (
        <View style={{paddingRight: 16}}>
          <Icon name={iconName} size={20} color="#969BAB" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#969BAB',
    borderWidth: 1,
    borderRadius: 4,
    height: 52,
  },
  inputStyle: {
    flex: 1,
    height: 52,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
