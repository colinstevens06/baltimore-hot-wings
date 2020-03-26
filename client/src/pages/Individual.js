import React from "react";
import { useParams } from "react-router-dom";

// layout features
import Container from 'react-bootstrap/Container';
import IndividualHero from "../components/Hero-Individual/index.js";
import StoreInfo from "../components/Table-Individual"
import RestaurantDropdown from "../components/Resturant-Dropdown"

function IndividualPage() {
  let { id } = useParams()

  return (
    <div>
      <Container>

        <IndividualHero id={id} />
        <RestaurantDropdown />
        <StoreInfo id={id} />
      </Container>
    </div>
  )
}

export default IndividualPage