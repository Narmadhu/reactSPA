import React from "react";
import Filter from "../filter/filter";
import Users from "../usersList/users";

function Home() {
  return (
    <div className="home">
      <Filter />
      <Users />
    </div>
  );
}

export default Home;
