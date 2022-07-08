import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import { Modal } from '../../components/Modal'
import { TodoForm } from '../../components/TodoForm';
import './styles.css'

export function TodoButton() {
  const { openModal, setOpenModal } = useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(openModal => !openModal);
  }

  return (
    <>
      <button className={`todo-btn`} onClick={onClickButton}>+</button>
      {
        !!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )
      }
    </>
  );
}