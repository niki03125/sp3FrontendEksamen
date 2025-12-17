import React from "react";
import { useState } from 'react'
import { NavLink, Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Login from "../login/Login";
import '../../App.css';

const Welcome= ({username, logout}) => (
      <div className={styles.Header}>
      <span>Welcome, {username}</span>
      <button onClick={logout}>Logout</button>
      </div>);

const Header = ({ headers }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUserName] = useState("");
  const navigate = useNavigate();

  const login = (username, password) => {
    if(username && password){
      setUserName(username)
      setIsLoggedIn(true);

      if(username === "admin") {
        navigate("/adminpage");
      }else{
        navigate("/home");
      }
    }
    }

  return (
    <div className={styles.header}>

      <div>
        <Link to="/home" className={styles.headerLogo} >
          <img src="/logo.png" alt="Logo" className={styles.headerLogo}/>
        </Link>
      </div>

        <nav>
        {headers.map((header, index) => (
          <NavLink
            key={index}
            to={header.url}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {header.title}
          </NavLink>
        ))}
        </nav>
        {isLoggedIn ? (
          <Welcome username = {username} logout={()=> setIsLoggedIn(false)} />
          ):(
          <Login login={login} />
          )}     
  </div>
  );
};

export default Header;
