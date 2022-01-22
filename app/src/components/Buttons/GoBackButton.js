import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

export const GoBackButton = ({onPress}) => (
  <Feather
    name="arrow-left"
    size={24}
    onPress={onPress}
    style={{marginLeft: 10}}
  />
);
