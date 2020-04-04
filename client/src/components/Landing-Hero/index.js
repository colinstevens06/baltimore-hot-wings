import React from 'react'
import WingsLogo from '../../assets/images/logos/bmore-wings-logo-large.png'

//layout
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function HeroLanding() {
  return (
    <div>
      <Row>
        <Col className="white-bg-landing-hero">
          <img className="img-fluid landing-hero-image" src={WingsLogo} alt="BMore Wings Logo" />
          <div className="d-inline-block main-text-box">
            <h1 className="main-header">BMore Wings App</h1>
            <div className="main-subhead"><em>All of Baltimore's wings deals in one place</em></div>

          </div>
        </Col>
      </Row>
    </div>
  )
}

export default HeroLanding