import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector } from 'react-redux';

const AppNavContainer = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const user = useSelector(state => state.auth.user)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authLoaded, setAuthLoaded] = useState(false)

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true)
      setAuthLoaded(true)
    } else {
      setIsAuthenticated(false)
      setAuthLoaded(true)
    }
  }, [isLoggedIn])

  return (
    <>
      { authLoaded ? <NavigationContainer>
        {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
      </NavigationContainer> : <ActivityIndicator />}
    </>
  );
};

export default AppNavContainer;

const styles = StyleSheet.create({});
