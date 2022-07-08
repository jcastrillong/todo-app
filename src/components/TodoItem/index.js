import { FaCheck, FaTrash } from 'react-icons/fa';
import './styles.css'

export function TodoItem({ todo, onComplete, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed && 'todo-item-completed'}`}>
      <span className={`icon-check ${todo.completed && 'icon-check-active'}`} onClick={onComplete}>
        <FaCheck/>
      </span>
      <span className='icon-delete' onClick={onDelete}>
        <FaTrash/>
      </span>
      <span className='todo-item-title'>{ todo.title }</span>
      <span>{ todo.text }</span>
      <span className='todo-item-date'>{ todo.date }</span>
    </li>
  )
}