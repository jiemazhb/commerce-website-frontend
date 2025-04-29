
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react'
import { UserContext } from "../../contexts";

export default function Logout({ userName }) {
  const { logout } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    logout();

    navigate('/');
  }

  return (
    <>
      <div className="dropdown my-n2">
        <a className="btn btn-link d-inline-flex align-items-center dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

          Welcome {userName}
        </a>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><a className="dropdown-item" href="#">Account</a></li>
          <li><a className="dropdown-item" href="#">Change password</a></li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>            
            <button className="dropdown-item" onClick={handleLogout}>
              Sign out
            </button></li>
        </ul>
      </div>
    </>
  )
}
