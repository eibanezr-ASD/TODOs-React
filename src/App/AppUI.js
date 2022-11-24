import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch"
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { FormularioTodo } from "../FormularioTodo/FormularioTodo";

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    }) {
    return (
        <React.Fragment>
      <section className="form glassmorphism-effect padding-box">
      <FormularioTodo />
      </section>
      <section className="padding-box">
      <TodoCounter 
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      /> 

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
        ))}
      </TodoList>

      <CreateTodoButton />
      </section>
    </React.Fragment>
    );
}

export {AppUI};