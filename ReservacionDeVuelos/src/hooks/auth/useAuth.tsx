import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const useAuth = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Estado para dar tiempo de validar los datos
  const [changeLoading, setChangeLoading] = useState(false);

  const handleCreateUser = async () => {
    if (name.length > 0 && email.length > 0 && password.length > 0) {
      setChangeLoading(true);
      await auth()
        .createUserWithEmailAndPassword(email.trim(), password)
        .then(() => {
          setChangeLoading(false);
          Alert.alert('User created successfully');
        })
        .catch(err => {
          setChangeLoading(false);
          console.log(err);
        });
    } else {
      Alert.alert('All fields are required');
      setChangeLoading(false);
    }
  };

  const handleLoginWithEmail = async () => {
    if (email.length > 0 && password.length > 0) {
      setChangeLoading(true);
      await auth()
        .signInWithEmailAndPassword(email.trim(), password)
        .then(userCredential => {
          const user = userCredential.user;
          setChangeLoading(false);
        })
        .catch(err => {
          Alert.alert(err.message);
          setChangeLoading(false);
        });
    } else {
      Alert.alert('All fields are required');
      setChangeLoading(false);
    }
  };

  const handleSignOut = async () => {
    await auth()
      .signOut()
      .then(() => {
        Alert.alert('Session finished');
      });
  };

  return {
    name,
    setName,
    email,
    password,
    changeLoading,
    setEmail,
    setPassword,
    setChangeLoading,
    handleCreateUser,
    handleLoginWithEmail,
    handleSignOut,
  };
};

export default useAuth;
