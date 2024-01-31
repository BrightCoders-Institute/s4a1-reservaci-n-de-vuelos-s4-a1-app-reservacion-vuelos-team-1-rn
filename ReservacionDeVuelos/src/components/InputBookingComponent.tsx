import React, {useState} from 'react';
import {
  TextInput as NativeTextInput,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {RowComponent} from '.';

const InputComponent = (props: TextInputProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState(props.secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const containerStyle = {
    ...stylesInput.inputContainer,
    borderColor: isFocused ? '#5f73ed' : '#222222',
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={() => {}}>
      <RowComponent styles={containerStyle}>
        <NativeTextInput
          {...props}
          secureTextEntry={secureTextEntry}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </RowComponent>
    </TouchableOpacity>
  );
};

export const stylesInput = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    marginVertical: 25,
  },
});

export default InputComponent;
