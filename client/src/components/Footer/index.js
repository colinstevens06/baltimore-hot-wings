import React from 'react'
import './style.css'


//layout
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



function Footer() {
  return (
    <div>
      <Row>
        <Col>
          <footer>
            <h4 className="d-inline-block"></h4>
            <Navbar fixed="bottom" collapseOnSelect expand="lg" bg="dark" variant="dark">

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <p align="center">&copy;2020 CTG Industries</p>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

          </footer>
        </Col>
      </Row>
    </div>
  )

}

export default Footer