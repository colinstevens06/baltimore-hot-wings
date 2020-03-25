import React from 'react'
import WingsLogo from '../../assets/images/logos/bmore-wings-logo-small.png'

// NAVBAR
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <img className="img-fluid nav-image" src={WingsLogo} alt="BMore Wings Logo" />
        <Navbar.Brand href="/">BMore Wing App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Restaurants</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

  )
}

export default Navigation;
