import React from "react";
import "./App.css";
import Home from "./home/home";
import { UsersProvider } from "./usersContext";

function App() {
  return (
    <UsersProvider>
      <div className="App">
        <Home />
      </div>
    </UsersProvider>
  );
}

export default App;
