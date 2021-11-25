import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../Button/Index';
import Container from '../common/Container';
import Input from '../Input/Index';
import Styles from './styles';
import { LOGIN } from '../../constants/routeNames';

const RegisterComponent = () => {
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
            // error={'This field is required'}
          />
          <Input
            label="First name"
            placeholder="Enter First name"
            iconPosition="right"
            // error={'This field is required'}
          />
          <Input
            label="Last name"
            placeholder="Enter Last name"
            iconPosition="right"
            // error={'This field is required'}
          />
          <Input
            label="Email"
            placeholder="Enter Email"
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
