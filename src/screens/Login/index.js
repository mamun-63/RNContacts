import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/Input/Index';

const Login = () => {
  const [text, onChangeText] = useState('');

  return (
    <Container>
      <Text>Login</Text>
      <Input
        label="Username"
        onChangeText={onChangeText}
        text={text}
      />
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({

});
