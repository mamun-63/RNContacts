import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/Input/Index';

const Login = () => {
  const [text, onChangeText] = useState('');

  return (
    <Container>
      <Input
        label="Username"
        onChangeText={onChangeText}
        text={text}
        iconPosition="right"
        // error={'This field is required'}
      />
      <Input
        label="Password"
        onChangeText={onChangeText}
        text={text}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
