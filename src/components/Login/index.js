import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../components/Button/Index';
import Container from '../../components/common/Container';
import Input from '../../components/Input/Index';

const index = () => {
  return (
    <Container>
      <Image style={{ height: 200, width: 200 }} source={require('../../assets/images/logo.png')} />
      <Input
        label="Username"
        placeholder="Enter Username"
        iconPosition="right"
        // error={'This field is required'}
      />
      <Input
        label="Password"
        placeholder="Enter Password"
        secureTextEntry={true}
        icon={<Text>Show</Text>}
        iconPosition="right"
      />

      <CustomButton title="Submit" primary />
    </Container>
  );
};

export default index;

const styles = StyleSheet.create({});
