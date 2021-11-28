import React, { useEffect, useState } from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNavContainer = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authLoaded, setAuthLoaded] = useState(false)

  const getUser = async () => {
    const user = await AsyncStorage.getItem('user')
    console.log('user > ', user, 'isLoggedIn', isLoggedIn)

    if (user) {
      setIsAuthenticated(true)
      setAuthLoaded(true)
    } else {
      setIsAuthenticated(false)
      setAuthLoaded(true)
    }
  }

  useEffect(() => {
    getUser ()
  },[])

  return (
    <>
    { authLoaded ? <NavigationContainer>
      {isLoggedIn || isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer> : <ActivityIndicator /> }
    </>
  );
};

export default AppNavContainer;

const styles = StyleSheet.create({});
