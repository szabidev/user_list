import React, { FC } from "react";
import ReactDOM from "react-dom";
import Button from "../button/Button";
import "./ErrorModal.css";

interface ErrorModalProps {
  message: string;
  setIsValid: (isValid: boolean) => void;
}

interface ModalOverlayProps {
  message: string;
  handleCancel: () => void;
}

const ModalOverlay: FC<ModalOverlayProps> = ({ message, handleCancel }) => {
  return (
    <div className="error-container" onClick={handleCancel}>
      <div className="error-message">
        <h2 className="error-title">Error occured!</h2>
        <p>{message}</p>
        <Button
          type="button"
          className="error-btn"
          title="Go Back"
          onClick={handleCancel}
        />
      </div>
    </div>
  );
};

const ErrorModal: FC<ErrorModalProps> = ({ message, setIsValid }) => {
  const handleCancel = () => {
    setIsValid(true);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay message={message} handleCancel={handleCancel} />,
        document.getElementById("modal-root") as HTMLElement
      )}
    </>
  );
};

export default ErrorModal;
