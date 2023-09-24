import React, { FC } from "react";
import "./User.css";

const User: FC<{ name: string; age: string }> = ({ name, age }) => {
  return (
    <li className="list-item">
      <p>
        Name: <span className="list-value">{name}</span>{" "}
      </p>
      <p>
        Age: <span className="list-value">{age}</span>
      </p>
    </li>
  );
};

export default User;
