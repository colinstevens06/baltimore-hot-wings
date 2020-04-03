import React from "react";
import { useParams } from "react-router-dom";

// layout features
import Container from 'react-bootstrap/Container';
import IndividualHero from "../components/Individual-Hero/index.js";
import StoreInfo from "../components/Table-Individual"
import RestaurantDropdown from "../components/Resturant-Dropdown"

function IndividualPage() {
  let { id } = useParams()

  return (
    <div>
      <div className="wings-bg-image"></div>

      <Container>


        <IndividualHero id={id} />
        <Container className="bg-light py-3 little-op">
          <RestaurantDropdown />
          <StoreInfo id={id} />

        </Container>
      </Container>
    </div>
  )
}

export default IndividualPage