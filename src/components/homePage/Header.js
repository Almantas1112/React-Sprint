import React from 'react'
import { Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-x1 navbar-expand-lg navbar-dark bg-dark">
    <Container>
    <Link className='navbar-brand' to="/"><i className="fa-brands fa-reacteurope" /></Link>
    <Nav className="me-auto">
      <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/ShoppingListApp">ShoppingApp</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/Counter">Counter</NavLink>
    </Nav>
    </Container>
  </nav>

  )
}

export default Header