import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';

import {
  ContainerComponent,
  InputComponent,
  TextComponent,
  CheckBoxComponent,
  RowComponent,
} from '../../components';

const SignUpScreen = () => {
  return (
    <ContainerComponent>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
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
            styles={{marginBottom: 30}}
          />
          <RowComponent>
            <CheckBoxComponent text="I agree to the " />
            <TextComponent
              text="Terms"
              color="#B6B7BA"
              font="400"
              size={16}
              styles={{textDecorationLine: 'underline'}}
            />
            <TextComponent text=" and " color="#B6B7BA" font="400" size={16} />
            <TextComponent
              text="Privacy Policy."
              color="#B6B7BA"
              font="400"
              size={16}
              styles={{textDecorationLine: 'underline'}}
            />
            <Text style={{color: 'red'}}> *</Text>
          </RowComponent>
          <CheckBoxComponent text="Subscribe for select product updates." />

          <RowComponent
            onPress={() => {}}
            styles={{...styles.buttons, marginTop: 30}}>
            <TextComponent text="Sign Up" color="white" font="bold" />
          </RowComponent>

          <RowComponent styles={{justifyContent: 'center', marginVertical: 30}}>
            <View
              style={{flex: 1, borderWidth: 0.3, backgroundColor: '#B6B7BA'}}
            />
            <TextComponent text="    Or    " color="#B6B7BA" />
            <View
              style={{flex: 1, borderWidth: 0.3, backgroundColor: '#B6B7BA'}}
            />
          </RowComponent>

          <RowComponent onPress={() => {}} styles={styles.buttons}>
            <Image
              source={require('../../assets/icons/logo-google.webp')}
              style={{
                width: 25,
                height: 25,
                right: 50,
              }}
            />
            <TextComponent
              text="Sign Up with Google"
              color="white"
              font="bold"
            />
          </RowComponent>

          <RowComponent styles={{justifyContent: 'center', marginTop: 40}}>
            <TextComponent
              text="Already have an account?"
              color="#B6B7BA"
              size={18}
            />
            <TextComponent
              text="  Log In"
              color="#626de7"
              size={18}
              styles={{textDecorationLine: 'underline'}}
            />
          </RowComponent>
        </View>
      </TouchableWithoutFeedback>
    </ContainerComponent>
  );
};

export const styles = StyleSheet.create({
  buttons: {
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    backgroundColor: '#b6b7ba',
    justifyContent: 'center',
  },
});

export default SignUpScreen;
