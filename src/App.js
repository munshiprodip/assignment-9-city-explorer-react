import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthRoute from "./component/AuthRouth/AuthRoute";
import HeaderNav from "./component/HeaderNav/HeaderNav";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import SelectRoute from "./component/SelectRoute/SelectRoute";
import Blog from "./component/Upcomming/Blog";
import Contact from "./component/Upcomming/Contact";
import Destination from "./component/Upcomming/Destination";

export const UserContext = createContext({});

function App() {
  const [LoggedInUserInfo, setLoggedInUserInfo] = useState();

  return (
    <UserContext.Provider value={[LoggedInUserInfo, setLoggedInUserInfo]}>
      <Router>
        <HeaderNav></HeaderNav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <AuthRoute path="/select-route/:category">
            <SelectRoute />
          </AuthRoute>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <AuthRoute path="/destination">
            <Destination />
          </AuthRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
