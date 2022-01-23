import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Wallpaper from '../assets/images/wallpaper.png';

import {PrimaryButton} from '../components/Buttons';

export const JoinScreen = ({navigation}) => {
  const route = useRoute();

  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Image source={Wallpaper} style={styles.wallpaper} />
        <Pressable
          style={styles.skip}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.skipText}>SKIP</Text>
        </Pressable>
      </View>
      <View style={styles.bottom}>
        <PrimaryButton
          label="Chcę dołączyć"
          onPress={() =>
            navigation.navigate('Register', {name: route.params.name})
          }
        />
        <PrimaryButton
          label="Posiadam już konto"
          outline={true}
          onPress={() =>
            navigation.navigate('Login', {name: route.params.name})
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#969BAB',
  },
  bottom: {
    margin: 24,
  },
  wallpaper: {
    resizeMode: 'cover',
    height: 400,
    width: '100%',
    position: 'relative',
  },
  skip: {
    position: 'absolute',
    top: 48,
    right: 24,
  },
  skipText: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
