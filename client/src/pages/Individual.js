import React, { useState, useEffect } from "react";
// import API from "../utils/API.js";
// import { useParams } from "react-router-dom";

// layout features
import Container from 'react-bootstrap/Container';
import IndividualHero from "../components/Hero-Individual/index.js";
import StoreInfo from "../components/Table-Individual"

function IndividualPage() {
  // getting the id from the URL
  // const { id } = useParams()

  // const [restaurant, setRestaurant] = useState({})

  // // using that ID to set the state for the retaurant's information
  // useEffect(() => {
  //   API.getRestaurant(id)
  //     // .then(res => console.log(res.data))
  //     .then(res => setRestaurant(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  return (
    <div>
      <Container>
        <IndividualHero
        // name={restaurant.name}
        // id={restaurant._id}
        // city={restaurant.location.city.name}
        // cityName={restaurant.location}
        />
        <StoreInfo />


      </Container>
    </div>
  )
}


export default IndividualPage