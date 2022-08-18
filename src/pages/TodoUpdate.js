import React from 'react'
import { View,Button } from 'react-native';
import { useState } from 'react/cjs/react.development';
import Input2 from '../components/Input2/Input2';

function TodoUpdate({route,navigation}) {

    const text = route.params.todo.todoString;
    const Id = route.params.todo.id;
    const [todoText, SetTodoText] = useState(text);
  return (
      <View>
          <Input2  onChangeText={SetTodoText} value={todoText}></Input2>
          <Button  title="Güncelle" onPress={() => navigation.navigate("TodoApp", {todoText, Id})} />
      </View>
  )
}

export default TodoUpdate
