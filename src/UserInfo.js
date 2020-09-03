import React, { useContext } from "react";
import { UsersContext } from "./usersContext";
// import Users from "./usersList/users";

const UserInfo = ({ match }) => {
  const [userInfo, setUserInfo] = useContext(UsersContext);
  return (
    <div className="UserInfo">
      <h3>UserInfo</h3>
    </div>
  );
};

export default UserInfo;
