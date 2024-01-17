import {View, Text} from 'react-native';
import React from 'react';
import {
  ContainerComponent,
  InputComponent,
  TextComponent,
  ButtonComponent,
} from '../../components';

const SignUpScreen = () => {
  return (
    <ContainerComponent>
      <TextComponent text="Sign Up" color="#5f73ed" font="bold" size={30} />

      <TextComponent text="First Name" font="500" size={20} />
      <InputComponent placeholder="Nombre" />

      <TextComponent text="Mail*" font="500" size={20} />
      <InputComponent placeholder="correo" />

      <TextComponent text="Password*" font="500" size={20} />
      <InputComponent placeholder="Contraseña" secureTextEntry />

      <TextComponent
        text="Use 8 or more characters with a mix of letters,number, and symbols."
        color="#B6B7BA"
        font="400"
        size={13}
      />

      <ButtonComponent Text="Button" />
    </ContainerComponent>
  );
};

export default SignUpScreen;
