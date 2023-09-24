import React, { FC } from "react";
import Button from "../button/Button";
import "./ErrorModal.css";

interface ErrorModalProps {
  message: string;
  setIsValid: (isValid: boolean) => void;
}

export const ErrorModal: FC<ErrorModalProps> = ({ message, setIsValid }) => {
  const handleCancel = () => {
    setIsValid(true);
  };
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

export default ErrorModal;
