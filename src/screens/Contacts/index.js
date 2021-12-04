import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from '../../components/common/Icon'
import ContactsComponent from '../../components/ContactsComponent'

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation()

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Icon type='material' style={{ paddingRight: 10 }} size={22} name='menu' />
        </TouchableOpacity>
      )
    })
  }, [])

  return <ContactsComponent />  
}

export default Contacts

const styles = StyleSheet.create({})
