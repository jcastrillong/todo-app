import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import './styles.css'

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <input 
      type="text" 
      className="todo-search"
      value={searchValue}
      placeholder="Buscar" 
      onChange={handleChange}
    />
  );
}