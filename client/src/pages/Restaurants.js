import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
// import { Link } from "react-router-dom";

// layout features
import Container from 'react-bootstrap/Container';

// importing components
import HeroLanding from "../components/Hero-Landing"
import RestaurantCard from "../components/Restaurant-Cards/index.js";
import CardWrapper from "../components/Card-Wrapper"

function RestaurantPage(props) {

  // United STATES
  const [restaurants, setRestaurants] = useState([])

  const [todaysRestaurant, setTodaysRestaurant] = useState({})

  // initializing with the data from the db
  useEffect(() => {

    getTodaysInfo()
    getRestaurantsDB()
  }, [])

  // hits the DB via the API to get all the restaurants info, then initialize
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

  // get the information for all the restaurants, sorted for today
  const getTodaysInfo = () => {
    const today = new Date().getDay()
    console.log(today)



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
              price={store.wings[0].price}
              count={store.wings[0].count}
              isSpecial={store.wings[0].isSpecial}

            />
          ))}
        </CardWrapper>
      </Container>
    </div>
  );
}

export default RestaurantPage;