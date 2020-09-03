import React, { useEffect, useState } from "react";
import User from "../User";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  useEffect(() => {
    getUsers();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getUsers = async () => {
    const response = await fetch(`https://reqres.in/api/users?page=2`);
    const data = await response.json();
    console.log(data.data);
    setUsers(data.data);
  };

  return (
    <div className="users">
      <form onSubmit={getSearch} className="filter-form">
        <h3>Filter by</h3>
        <input
          type="text"
          placeholder="Name"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit">Apply</button>
      </form>
      <h3>List of users</h3>

      {users.map((user) => (
        <Link to={`/users/${user.id}`}>
          <User firstname={user.first_name} image={user.avatar} key={user.id} />
        </Link>
      ))}
    </div>
  );
};

export default Users;
