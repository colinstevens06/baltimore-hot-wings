import React from "react";

// BOOTSTRAP
import Jumbotron from 'react-bootstrap/Jumbotron'

function IndividualHero(props) {

  return (
    <div>

      <Jumbotron className="mt-5">
        <h1>{props.name}</h1>
        <h2>Canton</h2>
        <div className="address-line">134 Bovelder Court</div>
        <div className="address-line">Baltimore, MD 21224</div>
      </Jumbotron>

    </div>
  )
}

export default IndividualHero