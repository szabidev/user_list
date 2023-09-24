import React, { FC, useState } from "react";
import Button from "../../UI/button/Button";
import "./AddUser.css";
import { UserData } from "@/App";
import ErrorModal from "../../UI/modal/ErrorModal";
import Card from "../../UI/card/Card";

interface AddUserProps {
  handleUser: (data: UserData) => void;
}

const AddUser: FC<AddUserProps> = ({ handleUser }) => {
  const [userName, setUserName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleUserName = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setUserName(e.currentTarget.value);
  };

  const handleAge = (e: React.FormEvent<HTMLInputElement>) => {
    setAge(e.currentTarget.value);
  };

  const handlePopUp = () => {
    if (!userName && !age) {
      setIsValid(false);
      setErrorMsg("No data entered, please complete the form");
    } else if (Number(age) < 0) {
      setIsValid(false);
      setErrorMsg("Please enter a valid age");
    } else {
      setIsValid(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputData = {
      name: userName,
      age: age,
      id: Math.random().toString(),
    };

    handlePopUp();
    handleUser(inputData);
    setUserName("");
    setAge("");
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
            onChange={handleUserName}
            value={userName}
          />
        </div>
        <div className="input-group">
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            placeholder="Enter age..."
            onChange={handleAge}
            value={age}
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
