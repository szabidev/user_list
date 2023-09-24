import React, { FC } from "react";

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  className: string;
  title: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ type, className, title, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
