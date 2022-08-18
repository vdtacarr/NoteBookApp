import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './pages/WelcomeScreen';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';
import TodoMain from './pages/TodoMain';
import TodoUpdate from './pages/TodoUpdate';
const Stack = createNativeStackNavigator();

const App = () => {
  return(
<NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,}}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="MemberSignScreen" component={MemberSign} />
          <Stack.Screen name="MemberResultScreen" component={MemberResult} />
          <Stack.Screen name="TodoApp" component={TodoMain} />
          <Stack.Screen name="UpdateTodo" component={TodoUpdate} />
      </Stack.Navigator>
  </NavigationContainer>
  )
  
  
};

export default App;
