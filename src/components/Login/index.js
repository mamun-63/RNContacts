import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/Button/Index';
import Container from '../../components/common/Container';
import Input from '../../components/Input/Index';
import Styles from './styles';
import {REGISTER} from '../../constants/routeNames';
import Message from '../Message/Index';

const index = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image
        style={Styles.logoImage}
        source={require('../../assets/images/logo.png')}
      />
      <View>
        <Text style={Styles.title}>Welcome to RNContacts</Text>
        <Text style={Styles.subTitle}>Please login here</Text>

        <Message
          onDismiss={() => {}}
          retry
          retryFn={() => {
            console.log('retry');
          }}
          primary
          message="invalid credentials"
        />
        <Message onDismiss={() => {}} info message="invalid credentials" />
        <Message onDismiss={() => {}} danger message="invalid credentials" />
        <Message onDismiss={() => {}} success message="invalid credentials" />

        <View style={Styles.form}>
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

          <View style={Styles.createSection}>
            <Text style={Styles.infoText}>Need a new account?</Text>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={Styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default index;

const styles = StyleSheet.create({});
