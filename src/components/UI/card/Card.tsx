import React, { FC } from "react";
import "./Card.css";

interface CardProps {
  children?: string | JSX.Element | JSX.Element[];
  className: string;
}

const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
