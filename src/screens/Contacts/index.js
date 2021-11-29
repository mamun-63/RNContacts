import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation()

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Text style={{ paddingRight: 10 }}>Nav</Text>
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
