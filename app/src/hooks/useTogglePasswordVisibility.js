import {useState} from 'react';

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [iconName, setIconName] = useState('ios-eye-outline');

  const handlePasswordVisibility = () => {
    if (iconName === 'ios-eye-outline') {
      setIconName('ios-eye-off-outline');
      setPasswordVisibility(false);
    } else if (iconName === 'ios-eye-off-outline') {
      setIconName('ios-eye-outline');
      setPasswordVisibility(true);
    }
  };

  return {
    passwordVisibility,
    iconName,
    handlePasswordVisibility,
  };
};
