import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import { Link } from "react-router-dom";

// layout features
import Container from 'react-bootstrap/Container';

// importing components
import HeroLanding from "../components/Hero-Landing"

function Restaurants(props) {


  return (

    <div>
      <Container>
        <HeroLanding />
      </Container>
    </div>


  );
}




export default Restaurants;
