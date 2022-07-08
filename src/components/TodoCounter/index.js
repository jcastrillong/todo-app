import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import './styles.css'

export function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h2 className="todo-counter">Completados {completedTodos} de {totalTodos} </h2>
  );
}