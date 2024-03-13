import { createPortal } from "react-dom";

import "./styles.css";

function Modal({ children }) {
  const modalElement = document.getElementById("modal");

  return createPortal(
    <div className="ModalBackground">{children}</div>,
    modalElement
  );
}

export { Modal };
