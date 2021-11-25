import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import LoginComponent from '../../components/Login'

const Login = () => {
  const [text, onChangeText] = useState('');

  return (
    <LoginComponent />
  );
};

export default Login;

const styles = StyleSheet.create({});
