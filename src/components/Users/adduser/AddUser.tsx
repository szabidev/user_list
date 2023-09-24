import React, { FC, useState, useRef } from "react";
import Button from "../../UI/button/Button";
import "./AddUser.css";
import { UserData } from "@/App";
import ErrorModal from "../../UI/modal/ErrorModal";
import Card from "../../UI/card/Card";

interface AddUserProps {
  handleUser: (data: UserData) => void;
}

const AddUser: FC<AddUserProps> = ({ handleUser }) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const handlePopUp = () => {
    if (
      nameInputRef.current &&
      !nameInputRef.current.value &&
      ageInputRef.current &&
      !ageInputRef.current.value
    ) {
      setIsValid(false);
      setErrorMsg("No data entered, please complete the form");
    } else if (ageInputRef.current && Number(ageInputRef.current.value) < 0) {
      setIsValid(false);
      setErrorMsg("Please enter a valid age");
    } else {
      setIsValid(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameInputRef.current != null && ageInputRef.current != null) {
      const enteredName = nameInputRef.current.value;
      const enteredAge = ageInputRef.current.value;

      const inputData = {
        name: enteredName,
        age: enteredAge,
        id: Math.random().toString(),
      };
      handlePopUp();
      handleUser(inputData);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  return (
    <Card className="user-container">
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username..."
            ref={nameInputRef}
          />
        </div>
        <div className="input-group">
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            placeholder="Enter age..."
            ref={ageInputRef}
          />
        </div>
        <div className="input-control">
          <Button type="submit" className="add-user__btn" title="Add User" />
        </div>
        {!isValid && <ErrorModal message={errorMsg} setIsValid={setIsValid} />}
      </form>
    </Card>
  );
};

export default AddUser;
