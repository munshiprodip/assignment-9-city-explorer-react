import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const HeaderNav = () => {
    const [ LoggedInUserInfo, setLoggedInUserInfo ] = useContext(UserContext);
    const history = useHistory()
    const login = () =>{
      history.push('/login');
    }
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light container">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          City Explorer BD
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/destination">
                Destination
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            
            {
                (LoggedInUserInfo?.email)? <li className="nav-item"> <p className="nav-link">{LoggedInUserInfo.displayName}</p></li> : ''
            }
            <li className="nav-item">
                {
                    (LoggedInUserInfo?.email)? <button onClick={()=>setLoggedInUserInfo({})} className="btn btn-danger ">LOGOUT</button> : <button onClick={login} className="btn btn-primary">LOGIN</button>
                }
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
