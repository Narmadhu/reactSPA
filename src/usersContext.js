import React, { useState, useEffect, createContext } from "react";

export const UsersContext = createContext();
export const UserInfoContext = createContext();

export const UserInfoProvider = (props) => {
  const [userInfo, setUserInfo] = useState();
  return (
    <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
      {props.children}
    </UserInfoContext.Provider>
  );
};

export const UsersProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  //   const getSearch = (e) => {
  //     e.preventDefault();
  //     setQuery(search);
  //   };

  useEffect(() => {
    getUsers();
  }, []); //query

  //   const updateSearch = (e) => {
  //     setSearch(e.target.value);
  //     console.log(search);
  //   };

  const getUsers = async () => {
    const response = await fetch(`https://reqres.in/api/users?page=2`);
    const data = await response.json();
    console.log(data.data);
    setUsers(data.data);
  };
  return (
    <UsersContext.Provider value={[users, setUsers]}>
      {props.children}
    </UsersContext.Provider>
  );
};
