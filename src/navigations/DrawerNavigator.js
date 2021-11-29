import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeNavigator from './HomeNavigator'
import { HOME_NAVIGATOR } from '../constants/routeNames'
import SideMenu from './SideMenu'

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator()

  const getDrawerContent = (navigation) => (
    <SideMenu navigation={navigation} />
  )

  return (
    <Drawer.Navigator drawerType="slide" drawerContent={({navigation}) => getDrawerContent(navigation)} screenOptions={{ headerShown: false }}>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

