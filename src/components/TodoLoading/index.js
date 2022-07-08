import './styles.css'

export function TodoLoading() {
  return (
    <div className='loadingTodo-container'>
      <span className="loadingTodo-icon-check"></span>
      <span className="loadingTodo-icon-delete"></span>
      <span className="loadingTodo-title"></span>
      <span className="loadingTodo-text"></span>
      <span className="loadingTodo-date"></span>
    </div>
  );
}