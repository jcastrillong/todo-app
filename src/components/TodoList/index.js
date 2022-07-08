import { useContext } from 'react';
import { TodoItem } from '../TodoItem'
import { TodoLoading } from '../TodoLoading';
import { TodoContext } from '../../contexts/TodoContext';
import './styles.css'

export function TodoList(props) {
  const {
    loading,
    todos,
    searchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = useContext(TodoContext);

  return (
    <section className='todo-list-wrapper'>
      <ul className="todo-list">
        {
          loading && 
          new Array(5).fill(1).map((a, i) => <TodoLoading key={i}/>)
        }
        {
          (!loading && !todos.length) && 
          <p className=''>
            ¡Crea tu primera tarea!
          </p> 
        }
        {
          (!searchedTodos.length && searchValue) &&
          <p className=''>
            No hay resultados para "{searchValue}"
          </p>
        }
        {
          !loading &&
          searchedTodos.map((todo, key) => (
            <TodoItem
              key={key}
              todo={todo}
              onComplete={() => completeTodo(todo.title)}
              onDelete={() => deleteTodo(todo.title)}
            />
          ))
        }
      </ul>
    </section>
  );
}