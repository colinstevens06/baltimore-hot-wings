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

  const [todaysRestaurant, setTodaysRestaurant] = useState([])

  // initializing with the data from the db
  useEffect(() => {

    getRestaurantsDB()
    // getTodaysInfo()
  }, [])

  // hits the DB via the API to get all the restaurants info, then initialize
  const getRestaurantsDB = () => {
    API.getRestaurants()
      .then(res => {
        let stores = res.data
        setRestaurants(res.data)

        const today = new Date().getDay()
        console.log("STORES")
        console.log(stores)

        let todaysInfo = []

        for (let i = 0; i < stores.length; i++) {
          let storeInfo = {
            "id": stores[i]._id,
            "name": stores[i].name,
            "neighborhood": stores[i].location.city.neighborhood,
            "hours": stores[i].location.hours[today].time,
            "price": stores[i].wings[today].price,
            "count": stores[i].wings[today].count,
            "isSpecial": stores[i].wings[today].isSpecial
          }

          todaysInfo.push(storeInfo)

          console.log("TODAY TODAY TODAY")
          console.log(todaysInfo)
        }

        setTodaysRestaurant(todaysInfo)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Container>
        <HeroLanding />
        <CardWrapper>
          {todaysRestaurant.map(store => (
            <RestaurantCard
<<<<<<< Updated upstream
              key={store.id}
=======
              key={store._id}
              id={store._id}
>>>>>>> Stashed changes
              name={store.name}
              neighborhood={store.neighborhood}
              hours={store.hours}
              price={store.price}
              count={store.count}
              isSpecial={store.isSpecial}

            />
          ))}
        </CardWrapper>

      </Container>
    </div>
  );
}

export default RestaurantPage;