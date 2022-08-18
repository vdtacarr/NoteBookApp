import React, { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Dimensions } from 'react-native';

function TodoHeader({ todoCount }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}> Yapılacaklar({todoCount} tane)</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
   

  },
  text1: {
   
    fontSize: 20,
    color: "red",
     textAlign:'center'
  },

  text2: {
    marginLeft:10,
    fontSize: 20,
    color: "red",
  }
})

export default TodoHeader
