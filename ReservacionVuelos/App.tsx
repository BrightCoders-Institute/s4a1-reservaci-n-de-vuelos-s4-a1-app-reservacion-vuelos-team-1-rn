import React from 'react';
import {SignUpScreen} from './src/screens';
import {SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SignUpScreen />
    </SafeAreaView>
  );
}

export default App;
