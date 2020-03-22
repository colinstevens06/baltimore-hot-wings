import React, { useState, useEffect } from "react";
// import API from "../utils/API.js";
// import { useParams } from "react-router-dom";

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