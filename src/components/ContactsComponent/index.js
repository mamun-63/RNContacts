import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../common/Button/Index'
import Container from '../common/Container'

const ContactsComponent = () => {
  return (
    <Container>
      <CustomButton secondary title='Modal' />
    </Container>
  )
}

export default ContactsComponent

const styles = StyleSheet.create({})
