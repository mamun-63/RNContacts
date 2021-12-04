import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../common/Button/Index';
import Container from '../common/Container';
import AppModal from '../common/AppModal'

const ContactsComponent = ({ modalVisible, setModalVisible }) => {

  return (
    <Container>
      <CustomButton onPress={() => setModalVisible(true)} secondary title="Modal" />
      <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} /> 
    </Container>
  );
};

export default ContactsComponent;

const styles = StyleSheet.create({});