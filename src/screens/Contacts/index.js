import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation()

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Icon style={{ paddingRight: 10 }} size={22} name='menu' />
        </TouchableOpacity>
      )
    })
  }, [])

  return (
    <View>
      <Text>Contacts</Text>
    </View>
  )
}

export default Contacts

const styles = StyleSheet.create({})
