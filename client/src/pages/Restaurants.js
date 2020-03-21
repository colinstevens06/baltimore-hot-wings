import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import { Link } from "react-router-dom";

// layout features
import Container from 'react-bootstrap/Container';

// importing components
import HeroLanding from "../components/Hero-Landing"
import RestaurantCard from "../components/Restaurant-Cards/index.js";
import CardWrapper from "../components/Card-Wrapper"


function RestaurantPage(props) {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    getRestaurantsDB()
  }, [])

  const getRestaurantsDB = () => {
    API.getRestaurants()
      .then(res => {
        console.log("Front-end hit")
        console.log(res.data)
        setRestaurants(res.data)
        console.log(restaurants)
      })
      .catch(err => console.log(err))
  }

  return (

    <div>
      <Container>
        <HeroLanding />
        <CardWrapper>
          {restaurants.map(store => (
            <RestaurantCard
              key={store._id}
              name={store.name}
              neighborhood={store.location.city.neighborhood}
              hours={store.location.hours.Monday}
            // price={}


            />
          ))}

        </CardWrapper>
      </Container>
    </div>


  );
}




export default RestaurantPage;
