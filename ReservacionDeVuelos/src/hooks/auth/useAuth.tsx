import {View, Text} from 'react-native';
import React, {useState} from 'react';

const useAuth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Estado para dar tiempo de validar los datos
  const [changeLoading, setChangeLoading] = useState(false);

  return {
    email,
    password,
    changeLoading,
    setEmail,
    setPassword,
    setChangeLoading,
  };
};

export default useAuth;
