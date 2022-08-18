import React from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from './Input.style';

function Input({label, placeholder, onChangeText}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput onChangeText={onChangeText} placeholder={placeholder} style={styles.input_container} ></TextInput>
    </View>
  )
}

export default Input
