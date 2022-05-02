import React from 'react'
import "../styles/Navbar.css"
import logo from "../images/logo/logo.jpg"
function Navbar() {
  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light shadow-lg p-3 mb-5 bg-white rounded">
  <div className="container-fluid">
                  <a className="navbar-brand text-dark font-weight-bold" href="#">
                      <img src={ logo } alt="logo" />
                  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <a className="nav-link text-dark" aria-current="page" href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" aria-current="page" href="#">Cart</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar