{
  /*Import react component start*/
}
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
{
  /*Import react component end*/
}

{
  /*Import component start*/
}
import {
  ContainerComponent,
  InputComponent,
  TextComponent,
  CheckBoxComponent,
  RowComponent,
  SectionComponent,
} from '../../components';
import useAuth from '../../hooks/auth/useAuth';
{
  /*Import component end*/
}

{
  /*const start*/
}
const SignUpScreen = () => {
  const {
    changeLoading,
    email,
    password,
    setChangeLoading,
    setEmail,
    setPassword,
  } = useAuth();

  const [isFull, setIsFull] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  {
    /*const end*/
  }
  return (
    <ContainerComponent>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled>
        <View>
          <TextComponent text="Sign Up" color="#5f73ed" font="bold" size={30} />
          {/*sec end*/}
          <SectionComponent>
            <TextComponent text="First Name" font="500" size={20} />
            <InputComponent placeholder="Nombre" />

            <TextComponent text="Mail*" font="500" size={20} />
            <InputComponent
              placeholder="correo"
              keyboardType="email-address"
              value={email}
              onChangeText={val => setEmail(val)}
            />

            <TextComponent text="Password*" font="500" size={20} />
            <InputComponent
              placeholder="Contraseña"
              secureTextEntry
              value={password}
              keyboardType="default"
              onChangeText={val => setPassword(val)}
            />

            <TextComponent
              text="Use 8 or more characters with a mix of letters,number, and symbols."
              color="#B6B7BA"
              font="400"
              size={13}
            />
          </SectionComponent>

          <SectionComponent>
            <RowComponent>
              <CheckBoxComponent />
              <TextComponent
                text="I agree to the "
                color="#B6B7BA"
                font="400"
                size={16}
              />
              <TextComponent
                text="Terms"
                color="#B6B7BA"
                font="400"
                size={16}
                styles={{textDecorationLine: 'underline'}}
                onPress={() => {}}
              />
              <TextComponent
                text=" and "
                color="#B6B7BA"
                font="400"
                size={16}
              />
              <TextComponent
                text="Privacy Policy."
                color="#B6B7BA"
                font="400"
                size={16}
                styles={{textDecorationLine: 'underline'}}
                onPress={() => {}}
              />
              <Text style={{color: 'red'}}> *</Text>
            </RowComponent>
            <RowComponent>
              <CheckBoxComponent />
              <TextComponent
                text="Subscribe for select product updates."
                color="#B6B7BA"
                font="400"
                size={16}
              />
            </RowComponent>
          </SectionComponent>

          <SectionComponent>
            {isDisabled ? (
              <RowComponent styles={{...styles.disabledButton}}>
                <TextComponent text="Sign Up" color="white" font="bold" />
              </RowComponent>
            ) : (
              <RowComponent
                onPress={() => {}}
                styles={{...styles.enabledButton, marginTop: 30}}>
                <TextComponent text="Sign Up" color="white" font="bold" />
              </RowComponent>
            )}

            <RowComponent
              styles={{justifyContent: 'center', marginVertical: 30}}>
              <View
                style={{flex: 1, borderWidth: 0.3, backgroundColor: '#B6B7BA'}}
              />
              <TextComponent text="    Or    " color="#B6B7BA" />
              <View
                style={{flex: 1, borderWidth: 0.3, backgroundColor: '#B6B7BA'}}
              />
            </RowComponent>

            {isDisabled ? (
              <RowComponent styles={styles.disabledButton}>
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
            ) : (
              <RowComponent onPress={() => {}} styles={styles.enabledButton}>
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
            )}
          </SectionComponent>

          <RowComponent styles={{justifyContent: 'center', marginTop: 15}}>
            <TextComponent
              text="Already have an account?  "
              color="#B6B7BA"
              size={18}
            />
            <TextComponent
              text="Log In"
              color="#626de7"
              size={18}
              styles={{textDecorationLine: 'underline'}}
              onPress={() => {}}
            />
          </RowComponent>
        </View>
      </TouchableWithoutFeedback>
    </ContainerComponent>
  );
};

export const styles = StyleSheet.create({
  disabledButton: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#b6b7ba',
    justifyContent: 'center',
  },
  enabledButton: {
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: '#626de7',
  },
});

export default SignUpScreen;
