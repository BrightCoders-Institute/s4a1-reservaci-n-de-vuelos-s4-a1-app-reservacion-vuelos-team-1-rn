import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';

interface Props {
  Text: string;
  color?: string;
}

const ButtonComponent = (props: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#007AFF',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => Alert.alert('Hola, mundo!')}>
        <Text style={{color: '#fff'}}></Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;
