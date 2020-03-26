import React, { useState, useEffect } from "react";
import API from "../utils/API.js";

// layout features
import Container from 'react-bootstrap/Container';

// importing components
import HeroLanding from "../components/Hero-Landing"
import RestaurantCard from "../components/Restaurant-Cards/index.js";
import CardWrapper from "../components/Card-Wrapper"
import Wheel from "../components/Spinner"
function RestaurantPage(props) {

  // United STATES
  const [restaurants, setRestaurants] = useState(undefined)
  const [todaysRestaurant, setTodaysRestaurant] = useState(undefined)
  const deals = ["coupons", "promotions", "randomPlace"]

  // initializing with the data from the db
  useEffect(() => {

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
            "isSpecial": stores[i].wings[today].isSpecial,
            "day": stores[i].wings[today].day
          }

          todaysInfo.push(storeInfo)

        }

        setTodaysRestaurant(todaysInfo)
      })
      .catch(err => console.log(err))
    console.log(restaurants)
  }, [])


  return (
    <div>

      {todaysRestaurant &&
        <div>

          <Container>
            <HeroLanding />
          </Container>
          <Container fluid className="py-4 dark-bg">
            <Container>
              <h2 className="tile-header">{todaysRestaurant[0].day}'s Wing Deals</h2>
              <CardWrapper>
                {todaysRestaurant.map(store => (
                  <RestaurantCard
                    key={store.id}
                    id={store.id}
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
            <Wheel items={deals} />
          </Container>


        </div>
      }
    </div>
  );
}

export default RestaurantPage;