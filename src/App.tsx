import React, { useState } from "react";
import AddUser from "./components/Users/adduser/AddUser";
import UserList from "./components/Users/userlist/UserList";

export interface UserData {
  name: string;
  age: string;
  id: string;
}

function App() {
  const [userData, setUserData] = useState<UserData[]>([]);

  const handleUser = (inputData: UserData) => {
    setUserData((prevData) => {
      return [inputData, ...prevData];
    });
  };

  return (
    <div className="main-container">
      <AddUser handleUser={handleUser} />
      <UserList userList={userData} />
    </div>
  );
}

export default App;
