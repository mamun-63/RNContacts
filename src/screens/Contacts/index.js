import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from '../../components/common/Icon'
import ContactsComponent from '../../components/ContactsComponent'

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Icon type='material' style={{ paddingRight: 10 }} size={22} name='menu' />
        </TouchableOpacity>
      )
    })
  }, [])

  return <ContactsComponent modalVisible={modalVisible} setModalVisible={setModalVisible} />  
}

export default Contacts

const styles = StyleSheet.create({})
