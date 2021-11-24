import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import CustomButton from '../../components/Button/Index';
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

      <CustomButton title='Submit' secondary loading={true} disabled={true} />
      <CustomButton title='Click Me' secondary loading />
      <CustomButton title='Submit' primary loading={true} />
      <CustomButton title='Submit' danger />
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
