import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../common/Button/Index';
import Container from '../common/Container';
import Input from '../common/Input/Index';
import Styles from './styles';
import { REGISTER } from '../../constants/routeNames';
import Message from '../common/Message/Index';

const index = ({ error, loading, form, justSignedup, onChange, onSubmit }) => {
  const { navigate } = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true)

  return (
    <Container>
      <Image
        style={Styles.logoImage}
        source={require('../../assets/images/logo.png')}
      />
      <View>
        <Text style={Styles.title}>Welcome to RNContacts</Text>
        <Text style={Styles.subTitle}>Please login here</Text>

        <View style={Styles.form}>
          {justSignedup && <Message
            onDismiss={() => { }}
            success
            message="Account created successfully"
          />}
          {error && (
            <Message
              onDismiss={() => { }}
              retry
              retryFn={onSubmit}
              danger
              message="invalid credentials"
            />
          )}

          <Input
            label="Username"
            placeholder="Enter Username"
            value={form.userName || null}
            iconPosition="right"
            onChangeText={value => {
              onChange({ name: 'userName', value });
            }}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            icon={<TouchableOpacity onPress={() => {
              setIsSecureEntry(prev => !prev)
            }}>
              <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
            </TouchableOpacity>}
            iconPosition="right"
            onChangeText={value => {
              onChange({ name: 'password', value });
            }}
          />

          <CustomButton
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
            title="Submit"
            primary
          />

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
