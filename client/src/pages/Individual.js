import React from "react";

// layout features
import Container from 'react-bootstrap/Container';
import IndividualHero from "../components/Hero-Individual/index.js";
import StoreInfo from "../components/Table-Individual"

function IndividualPage() {

  return (
    <div>
      <Container>
        <IndividualHero />
        <StoreInfo />
      </Container>
    </div>
  )
}

export default IndividualPage