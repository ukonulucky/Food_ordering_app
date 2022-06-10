import React from 'react'
import "../styles/Navbar.css"
import logo from "../images/logo/logo.jpg"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
function Navbar() {

  const cart = useSelector( state => state.cart)
  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light shadow-lg p-3 mb-5 bg-white rounded">
  <div className="container-fluid">
                  <Link className="navbar-brand text-dark font-weight-bold" to="/">
                      <img src={ logo } alt="logo" />
                  </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <a className="nav-link text-dark" aria-current="page" href="#">Login</a>
        </li>
              <li className="nav-item">
                
                <Link className="nav-link text-dark" aria-current="page" to="/viewpiza">Cart {cart.length}</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar