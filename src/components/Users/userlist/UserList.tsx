import { UserData } from "@/App";
import React, { FC } from "react";
import User from "../user/User";
import Card from "../../UI/card/Card";
import "./UserList.css";

interface UserListProps {
  userList: UserData[];
}

const UserList: FC<UserListProps> = ({ userList }) => {
  return (
    <Card className="list-container">
      <ul className="user-list__container">
        {userList.map(
          (user) =>
            user.name &&
            user.age && <User key={user.age} name={user.name} age={user.age} />
        )}
      </ul>
    </Card>
  );
};

export default UserList;
