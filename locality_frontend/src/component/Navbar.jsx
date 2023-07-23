import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../UserContext";

const Navbar = () => {
  const { loggedin, logout } = useUserContext();

  const showUserOptions = () => {
    if (loggedin) {
      return (
        <ul className="navbar-nav ms-auto">
          <button onClick={logout} className="btn btn-danger">
            Logout
          </button>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Locality
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Browseshop">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/BrowseShop">
                BrowseShop
              </NavLink>
            </li>
           
          </ul>
          {showUserOptions()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;