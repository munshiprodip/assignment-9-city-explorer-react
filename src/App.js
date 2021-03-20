import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./component/HeaderNav/HeaderNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import SelectRoute from "./component/SelectRoute/SelectRoute";
import { createContext, useState } from "react";
import AuthRoute from "./component/AuthRouth/AuthRoute";
import Blog from "./component/Upcomming/Blog";
import Destination from "./component/Upcomming/Destination";
import Contact from "./component/Upcomming/Contact";


export const UserContext = createContext({})

function App() {
  const [LoggedInUserInfo, setLoggedInUserInfo] = useState();
 
  return (
    <UserContext.Provider value={[ LoggedInUserInfo, setLoggedInUserInfo ]}>
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
          
          <Route path="/destination">
            <Destination />
          </Route>
          

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
