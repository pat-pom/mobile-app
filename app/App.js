import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {TabNavigation} from './src/navigation/TabNavigation';

import 'react-native-gesture-handler';

const App = () => (
  <NavigationContainer>
    <TabNavigation />
  </NavigationContainer>
);

export default App;
