import React from 'react'
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native';
function TodoItem({ todo, handleDelete, handleCompleteDelete, navigation, todoSet }) {

  return (
    <SafeAreaView style={styles.container}>
      {todo.isDeleted === false ?
        <TouchableOpacity style={styles.opacity_false} onPress={() => handleDelete(todo.id)} onLongPress={() => handleCompleteDelete(todo.id)} >
          <Text style={styles.todoContent}>{todo.todoString}</Text>
          <Text style={styles.delete}>Silmek için Dokununuz..</Text>
          <View style={styles.view}>
            <Text style={styles.date}> {todo.date}</Text>
            <Button style={styles.updateButton} onPress={() => navigation.navigate("UpdateTodo", { todo })} title="Düzenle" /> 

          </View>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.opacity_true} onPress={() => handleDelete(todo.id)}>
          <Text style={styles.todoContent}>{todo.todoString}</Text>
          <Text style={styles.date}> {todo.date}</Text>
        </TouchableOpacity>
      }
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    margin: 3,
    height:60
  },
  opacity_false: {
    backgroundColor: "green",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  opacity_true: {
    backgroundColor: "red",
    display:'flex',
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
  },
  todoContent: {
    flex:2,
    fontSize: 20,
    marginTop:10
  },
  delete:{
    flex:1,
    fontSize:10,
    marginBottom:0,
    fontWeight:'200'
  },
  view:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'flex-end',
  },
  date: {
    fontSize: 10,
    marginRight:3
  },
  updateButton: {
fontStyle:'italic',

  }
})
export default TodoItem