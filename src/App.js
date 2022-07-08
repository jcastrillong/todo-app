import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoButton } from './components/TodoButton'
import { TodoForm } from './components/TodoForm'
import { TodoProvider} from './contexts/TodoContext'

import './App.css'

function App() {
  return (
    <TodoProvider>
      <div className='create-task'>
        <TodoForm />
      </div>
      <div className='view-task-list'>
        <TodoCounter />
        <TodoSearch />
        <TodoList />
        <TodoButton />
      </div>
    </TodoProvider>
  );
}

export default App;
