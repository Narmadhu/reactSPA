import React, { useEffect, useState } from "react";
import User from "../User";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();
    console.log(data.data);
    setUsers(data.data);
  };

  return (
    <div className="users">
      <h3>List of users</h3>
      {users.map((user) => (
        <User firstname={user.first_name} image={user.avatar} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
