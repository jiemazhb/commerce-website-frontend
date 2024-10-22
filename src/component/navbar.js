import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './userContext';
import Logout from './logout'

export default function Navbar() {

  const { auth, logout } = useContext(UserContext);
  
    return (
      <>
        <ul className="nav mb-4">
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Sign up 
            </Link>
          </li>
          {auth  ? (
          <>
            <Logout userName = {auth.username}></Logout>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </>
        )}
        </ul>
      </>
    );
  }