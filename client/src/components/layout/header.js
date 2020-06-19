import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';

export default function Header() {

  const { userData, setUserData } = useContext(UserContext);

const logout = () =>{
  setUserData({
    token:undefined,
    user:undefined
  });
  localStorage.setItem("auth-token", "")
};


    return (
        <div>
    <nav className="navbar sticky-top  navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">BugTracker</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/register">Register</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Bugs 
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="/bugs"> Bug Status </a>
          <a className="dropdown-item" href="/newbugs">Submit Bug </a>
          <a className="dropdown-item" href="/viewbugs">View Bugs </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Knowledge Base </a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link"  href="/" onClick={logout}>logout</a>
      </li>
    </ul>
  
  </div>
</nav>
        </div>
    )
}
