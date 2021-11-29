import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useDispatch } from 'react-redux'
import HomeNavigator from './HomeNavigator'
import { HOME_NAVIGATOR } from '../constants/routeNames'
import SideMenu from './SideMenu'
import { resetUser } from '../store/auth/slice'

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator()
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(resetUser(null))
  }

  const getDrawerContent = (navigation) => (
    <SideMenu navigation={navigation} logout={logout} />
  )

  return (
    <Drawer.Navigator drawerType="slide" drawerContent={({navigation}) => getDrawerContent(navigation)} screenOptions={{ headerShown: false }}>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

