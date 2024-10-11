import React from 'react'
import logoImage from '../static/logo.png'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <section class="navbar">
        <div class="container">
            <div class="logo">
                <a href="#" title="Logo">
                    <img src={logoImage} alt="Restaurant Logo" class="img-responsive" />
                </a>
            </div>

            <div class="menu text-right">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/category">Categories</Link>
                    </li>
                    <li>
                        <a>Foods</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>

            <div class="clearfix"></div>
        </div>
    </section>
    </div>
  )
}

export default Navbar
