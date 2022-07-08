import { useState, useContext } from 'react'

import { TodoContext } from '../../contexts/TodoContext'

import './styles.css'

export function TodoForm() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const { addTodo } = useContext(TodoContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(title, text)
    setTitle('')
    setText('')
  }

  return (
    <>
      <h2 className='title-form'>Crea una nueva tarea</h2>
      <form className="todo-form" onSubmit={handleSubmit}>
        <label className="todo-form-label">Titulo</label>
        <input
          type="text"
          className="todo-form-title"
          placeholder="Ej: Cocina, Partido, etc."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className="todo-form-label">Texto</label>
        <textarea 
          className="todo-form-text"
          placeholder="Ej: Cortar la cebolla para el almuerzo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button 
          className="todo-form-btn"
          type='submit'
        >
          Agregar
        </button>
      </form>
    </>
  )
}