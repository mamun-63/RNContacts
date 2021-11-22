import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import { selectIsLoggedIn } from '../store/auth/slice';
import { useSelector } from 'react-redux';

const AppNavContainer = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;

const styles = StyleSheet.create({});
