import React from "react";
import Users from "../usersList/users";
import UserInfo from "../UserInfo";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Home() {
  return (
    <Router>
      <div className="home">
        <Switch>
          <Route path="/" exact component={WelcomePage} />
          <Route path="/users" exact component={Users} />
          <Route path="/users/:id" component={UserInfo} />
        </Switch>
      </div>
    </Router>
  );
}

const WelcomePage = () => (
  <div>
    <h2> Welcome to ReactSPA</h2>
    <Link to="/users">
      <button>Users List</button>
    </Link>
  </div>
);

export default Home;
