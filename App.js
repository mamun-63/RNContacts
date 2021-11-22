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
import { Provider } from 'react-redux';
import {store} from './src/store';

const App = () => {

  return (
    <Provider store={store}>
      <AppNavContainer></AppNavContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
