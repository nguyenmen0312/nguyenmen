import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Sidebar from "./components/organisms/Sidebar";
import Header from "./components/organisms/Header";
import Main from "./components/organisms/Main";
export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
           <Route path="/login"> {/*ở đây gọi các component */}
            <Login />
          </Route>
          <Route path="/register"> {/*ở đây gọi các component */}
            <Register />
          </Route>
          <Route path="/search/:text"> {/*ở đây gọi các component */}
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

// function Home() {//
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
