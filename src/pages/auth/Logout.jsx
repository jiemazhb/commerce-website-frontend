
import { Link, useNavigate } from 'react-router-dom';
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
        <button className="btn btn-link d-inline-flex align-items-center dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

          Welcome {userName}
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          {/* <li><a className="dropdown-item" href="#">Account</a></li> */}
          <li><Link className="dropdown-item" to="/account">Account</Link></li>
          <li>
              <Link className="dropdown-item" to="/changePsw">Change password</Link>
          </li>
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
