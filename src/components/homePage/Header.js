import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"><i className="fa-brands fa-reacteurope"></i></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/ShoppingListApp">
                    Shoping List App
                    </NavLink></li>
                </ul>
            </div>
        </nav>
  )
}

export default Header