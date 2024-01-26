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
  };
};

export default useAuth;
