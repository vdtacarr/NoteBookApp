import React from 'react'
import { FlatList, Text, SafeAreaView, StyleSheet } from 'react-native'
import TodoItem from './TodoItem'

function TodoList({todos, handleDelete, handleCompleteDelete, navigation, todoSet}) {
    const renderItems = ({item}) => <TodoItem style={styles.text}  key={item.id} todo={item} handleDelete={handleDelete} handleCompleteDelete={handleCompleteDelete} navigation={navigation} todoSet={todoSet} />;
  return (
   <SafeAreaView style={styles.container}>
     <FlatList 
     keyExtractor={item => item.id.toString() }
     data={todos}
     renderItem={renderItems}
     />
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
      marginTop:20
    },
    text:{
        backgroundColor:"violet",
        fontSize:20,
        margin:3,
        borderColor:'black',
        borderRadius:10,
        textAlign:'center' 
    }
})

export default TodoList