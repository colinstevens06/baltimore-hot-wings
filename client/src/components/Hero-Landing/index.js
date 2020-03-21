import React from 'react'
import './style.css'
import WingsLogo from '../../assets/images/logos/bmore-wings-logo-large.png'

//layout
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function HeroLanding() {
  return (
    <div>
      <Row>
        <Col>
          <img className="img-fluid hero-image" src={WingsLogo} alt="BMore Wings Logo" />
          <h1 className="d-inline-block">BMore Wings App</h1>
        </Col>
      </Row>
    </div>
  )

}

export default HeroLanding