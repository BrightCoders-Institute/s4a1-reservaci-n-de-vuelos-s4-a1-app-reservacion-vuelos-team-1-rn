import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {StackNavigation} from './src/routes/StackNavigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StackNavigation />
    </SafeAreaView>
  );
}

export default App;
