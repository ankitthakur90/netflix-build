import React from "react";
import "./ErrorModal.css";

function ErrorModal({ message, onClose }) {
  return (
    <div className="error-modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ErrorModal;
