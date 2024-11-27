import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-${props.Mode} bg-${props.Mode} fixed-top`}>
        <div className="container-fluid">
          <div className="d-flex justify-content-around align-items-center">
            <Link
              className="navbar-brand"
              to="/"
              style={{ fontWeight: "bold" }}
            >
              {props.title}
            </Link>

            <div
              className={`form-check form-switch text-${
                props.Mode === "dark" ? "light" : "dark"
              }`}
            >
              <div className="d-flex">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ marginRight: "15px" }}
                >
                  Home
                </Link>

                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`form-check form-switch text-${
              props.Mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              onClick={() => {
                props.toggleMode(null);
              }}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Toggle Mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
