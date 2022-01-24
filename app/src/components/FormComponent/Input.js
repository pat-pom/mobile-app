import React from 'react';
import {View, TextInput, Pressable, Text, StyleSheet} from 'react-native';

import {Icon} from '../Icon';

export const Input = ({
  iconName,
  placeholder,
  value,
  onChangeText,
  onIconPress,
  label,
  ...rest
}) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputStyle}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          {...rest}
        />
        {iconName && (
          <Pressable style={{paddingRight: 16}} onPress={onIconPress}>
            <Icon name={iconName} size={20} color="#969BAB" />
          </Pressable>
        )}
      </View>
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
  label: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    fontFamily: 'Poppins',
    marginBottom: 8,
  },
});
