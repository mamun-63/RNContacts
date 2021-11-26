import React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../Button/Index';
import Container from '../common/Container';
import Input from '../Input/Index';
import Styles from './styles';
import { LOGIN } from '../../constants/routeNames';

const RegisterComponent = ({ errors, form, onChange, onSubmit }) => {
  const {navigate} = useNavigation()

  return (
    <Container>
      <Image
        style={Styles.logoImage}
        source={require('../../assets/images/logo.png')}
      />
      <View>
        <Text style={Styles.title}>Welcome to RNContacts</Text>
        <Text style={Styles.subTitle}>Create a free account</Text>

        <View style={Styles.form}>
          <Input
            label="Username"
            placeholder="Enter Username"
            iconPosition="right"
            error={errors.userName}
            onChangeText={(value) => {
              onChange({name: 'userName', value})
            }}
          />
          <Input
            label="First name"
            placeholder="Enter First name"
            iconPosition="right"
            error={errors.firstName}
            onChangeText={(value) => {
              onChange({name: 'firstName', value})
            }}
          />
          <Input
            label="Last name"
            placeholder="Enter Last name"
            iconPosition="right"
            error={errors.lastName}
            onChangeText={(value) => {
              onChange({name: 'lastName', value})
            }}
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            iconPosition="right"
            error={errors.email}
            onChangeText={(value) => {
              onChange({name: 'email', value})
            }}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            error={errors.password}
            onChangeText={(value) => {
              onChange({name: 'password', value})
            }}
          />

          <CustomButton onPress={onSubmit} title="Submit" primary />

          <View style={Styles.createSection}>
            <Text style={Styles.infoText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={Styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;

const styles = StyleSheet.create({});
