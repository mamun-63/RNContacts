/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppNavContainer from './src/navigations';

const App = () => {

  return (
    <AppNavContainer></AppNavContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
