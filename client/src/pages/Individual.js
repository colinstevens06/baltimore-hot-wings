import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import { Link, useParams } from "react-router-dom";

// layout features
import Container from 'react-bootstrap/Container';
import IndividualHero from "../components/Hero-Individual/index.js";
import StoreInfo from "../components/Table-Individual"

function IndividualPage() {

  const [restaurant, setRestaurant] = useState([])
  // const [restaurants, setRestaurants] = useState([])

  // getting the id from the URL
  const { id } = useParams()

  // useing that ID to set the state for the retaurant's information
  useEffect(() => {
    API.getRestaurant(id)
      .then(res => setRestaurant(res.data))
      .catch(err => console.log(err))
    console.log(restaurant)
  }, [])

  return (
    <div>
      <Container>
        <IndividualHero
          name={restaurant.name}
          id={restaurant._id}
        // wings={restaurant.wings[0].price}
        // city={restaurant.location.city.name}

        />
        <StoreInfo />


      </Container>
    </div>
  )
}


export default IndividualPage