import {
  TextInput as NativeTextInput,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {ContainerComponent, RowComponent} from '.';

const InputComponent = (props: TextInputProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState(props.secureTextEntry);

  const handleShowHide = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <RowComponent styles={stylesInput.inputContainer}>
      <NativeTextInput
        {...props}
        secureTextEntry={secureTextEntry}
        style={stylesInput.textInput}
      />
      {props.secureTextEntry ? (
        <TouchableOpacity activeOpacity={0.8} onPress={handleShowHide}>
          {secureTextEntry ? (
            <Icon name="eye-outline" size={18} color="black" />
          ) : (
            <Icon name="eye-off-outline" size={18} color="black" />
          )}
        </TouchableOpacity>
      ) : null}
    </RowComponent>
  );
};

export const stylesInput = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#fafafa',
    borderWidth: 0.5,
    padding: 10,
    borderColor: '#222222',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  textInput: {
    flex: 1,
    padding: 0,
    fontSize: 16,
    color: 'black',
  },
});

export default InputComponent;
