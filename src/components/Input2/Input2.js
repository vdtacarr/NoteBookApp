import React from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from './Input2.style';

function Input2({label, placeholder, onChangeText, value}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} style={styles.input_container} ></TextInput>
    </View>
  )
}

export default Input2
