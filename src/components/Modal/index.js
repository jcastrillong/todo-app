import ReactDOM from "react-dom";
import './styles.css'

export function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("modal")
  );
}