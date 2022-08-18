import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import Input2 from '../components/Input2/Input2';
import Button from '../components/Button/Button';

function TodoMain({ route, navigation }) {
    if(route.params != undefined){
    }
    

    const [todoString, SetTodoString] = useState("");
    const [todos, SetTodos] = useState([]);
    const [count, SetCount] = useState(todos.length);
    const [id, SetId] = useState(todos.length);

    if (route.params != undefined) {
        const NewTodo = todos.map((item) => {
            const {todoText, Id} = route.params;

            if (item.id == Id) {
                return { ...item, todoString: todoText };
            }
            return item;
        });
        SetTodos(NewTodo);
        route.params = undefined;
    }
    const handleCompleteDelete = (Id) => {
       const newCard =  todos.filter((todo) =>  id != Id) 
       SetTodos(newCard);
    }

    const handleDelete = (Id) => {
        const NewTodo = todos.map((item) => {
            if (item.id == Id) {
                return { ...item, isDeleted: true };
            }
            return item;
        });
        SetTodos(NewTodo);
        if (count === 0) {
            return;
        }
        SetCount((prevState) => (prevState - 1));
    }

    const handlePress = () => {
        const d = new Date();
        const h = d.getHours();
        const m = d.getMinutes();
        const s = d.getSeconds();
        const time = h + ":" + m + ":" + s;
        const todo = {
            date: time,
            isDeleted: false,
            id: id,
            todoString: todoString,
        }
        SetTodos([...todos, todo]);
        SetTodoString("");
        SetCount(count + 1);
        SetId(id + 1);

    }
    return (
        <SafeAreaView>
            <TodoHeader todoCount={count} />
            <TodoList todos={todos} handleDelete={handleDelete} handleCompleteDelete={handleCompleteDelete} navigation={navigation} todoSet={SetTodos} />
            <Input2 placeholder="Yapılacak" onChangeText={SetTodoString} value={todoString} />
            <Button text="Ekle" onPress={handlePress} />
        </SafeAreaView>

    )
}



export default TodoMain