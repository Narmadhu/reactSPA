import React, { useContext } from "react";
import User from "../User";
import { Link } from "react-router-dom";
import { UsersContext } from "../usersContext";

const Users = () => {
  const [users, setUsers] = useContext(UsersContext);
  // const [userInfo, setUserInfo] = useContext(UserInfoContext);

  //   const [userInfo, setUserInfo] = useState([]);
  //   const [search, setSearch] = useState("");
  //   const [query, setQuery] = useState("");

  //   const getSearch = (e) => {
  //     e.preventDefault();
  //     setQuery(search);
  //   };

  // useEffect(() => {
  //   getUsers();
  // }, []); //query

  //   const updateSearch = (e) => {
  //     setSearch(e.target.value);
  //     console.log(search);
  //   };

  return (
    <div className="users">
      {/* <form onSubmit={getSearch} className="filter-form">
        <h3>Filter by</h3>
        <input
          type="text"
          placeholder="Name"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit">Apply</button>
      </form> */}
      <h3>List of users : ({users.length})</h3>

      {users.map((user) => (
        <Link to={`/users/${user.id}`}>
          <User
            firstname={user.first_name}
            image={user.avatar}
            key={user.id}
            length={user.length}
          />
        </Link>
      ))}
    </div>
  );
};

export default Users;
