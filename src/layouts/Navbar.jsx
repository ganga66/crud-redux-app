import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-light">
      <div className="container">
        <Link className="navbar-brand text-light fs-3 fs-bold" to="/">
          <img className="me-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Closed_Book_Icon.svg/1024px-Closed_Book_Icon.svg.png" width={'50px'} alt="" />
          BookList
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-4" to="/">
                Show Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-4" to="/add-book">
                Add Book
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
