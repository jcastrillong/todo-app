import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const { item: todos, saveItem: saveTodos, loading } = useLocalStorage("todos", []);
  const [ searchValue, setSearchValue ] = useState('');
  const [  openModal, setOpenModal ] = useState(false);
  
  let searchedTodos = []
  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()))
  }

  const addTodo = (title, text) => {
    const newTodos = [...todos]
    newTodos.push({
      title,
      text,
      completed: false,
      date: new Date().toLocaleString()
    })
    setOpenModal(false)
    saveTodos(newTodos)
  }

  const completeTodo = (title) => {
    const todoIndex = todos.findIndex(todo => todo.title === title)
    const newTodos = [...todos]
    if(newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = false
    } else {
      newTodos[todoIndex].completed = true
    }
    saveTodos(newTodos)
  }

  const deleteTodo = (title) => {
    const todoIndex = todos.findIndex(todo => todo.title === title)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{
      loading,
      todos,
      searchedTodos,
      searchValue,
      completedTodos,
      totalTodos,
      openModal,
      setOpenModal,
      addTodo,
      setSearchValue,
      completeTodo,
      deleteTodo
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
