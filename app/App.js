import React, {useContext} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {AuthContext} from './src/context/AuthContext';

const App = () => {
  const {auth} = useContext(AuthContext);

  console.warn(auth);

  return (
    <SafeAreaView>
      <Text>Hello React</Text>
    </SafeAreaView>
  );
};

export default App;
