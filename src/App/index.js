import React from "react";
import { AppUI } from "./AppUI";
import './App.css';

const deafaultTodos = [
  {
    text: 'Cortar cebolla',
    completed: false
  },
  {
    text: 'Tomar el curso de intro a React',
    completed: false
  },
  {
    text: 'Practicar javascript',
    completed: true
  },
  {
    text: 'Practicar React',
    completed: true
  }
]

function App() {

  const [todos, setTodos] = React.useState(deafaultTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todos => !!todos.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    todos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI 
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
