import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import styles from './styles';

const Input = ({style, onChangeText, icon, text, label}) => {
  return (
    <View>
      {label && <Text>{label}</Text>}

      <View style={styles.wrapper}>
        <View>{ icon && icon }</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </View>
  );
};

export default Input;
