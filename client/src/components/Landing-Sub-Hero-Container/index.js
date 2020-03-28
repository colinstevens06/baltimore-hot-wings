import React, { useState, useEffect } from "react";

import API from "../../utils/API";

// layout components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import LandingFiltersContainer from "../Landing-Filters-Container"


function LandingSubHeroContainer(props) {

  const [restaurants, setRestaurants] = useState(undefined)
  const [todaysRestaurant, setTodaysRestaurant] = useState(undefined)

  useEffect(() => {

    API.getRestaurants()
      .then(res => {
        let stores = res.data

        setRestaurants(stores)

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
  }, [])


  const dayOfWeekFilter = today => {
    let todaysInfo = []



    for (let i = 0; i < restaurants.length; i++) {
      let storeInfo = {
        "id": restaurants[i]._id,
        "name": restaurants[i].name,
        "neighborhood": restaurants[i].location.city.neighborhood,
        "hours": restaurants[i].location.hours[today].time,
        "price": restaurants[i].wings[today].price,
        "count": restaurants[i].wings[today].count,
        "isSpecial": restaurants[i].wings[today].isSpecial,
        "day": restaurants[i].wings[today].day
      }

      todaysInfo.push(storeInfo)

    }

    setTodaysRestaurant(todaysInfo)
  }

  const sortByPrice = () => {
    console.log("click heard")

    const todaysInfo = todaysRestaurant

    todaysInfo.sort(function (a, b) {
      if (parseInt(a.price) < parseInt(b.price)) {
        return -1
      } else if (parseInt(b.price) < parseInt(a.price)) {
        return 1
      } else {
        return 0
      }
    })

    setTodaysRestaurant(todaysInfo)
    console.log(todaysInfo)
    console.log(todaysRestaurant)

  }

  return (
    <div>

      {todaysRestaurant &&
        <div>

          <Row>
            <Col xs={6}>
              <h2 className="tile-header">{todaysRestaurant[0].day}'s Prices</h2>
              <p className="tile-subhead"><em>Specials marked in orange</em></p>

            </Col>
            <Col xs={6}>

              <LandingFiltersContainer
                click={props.click}
              />

              <Button onClick={() => sortByPrice()}>Sory by Price</Button>

            </Col>
          </Row>

        </div>
      }


    </div>
  )
}


export default LandingSubHeroContainer