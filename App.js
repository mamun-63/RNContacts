/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AppNavContainer from './src/navigations';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store';

// REDUX-PERSIST
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavContainer></AppNavContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
