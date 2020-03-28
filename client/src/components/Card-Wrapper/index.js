import React, { useState, useEffect } from "react";
import API from "../../utils/API";

// importing components
import RestaurantCard from "../Restaurant-Cards";

function CardWrapper(props) {
  const [todaysRestaurant, setTodaysRestaurant] = useState(undefined)
  const [allRestaurants, setAllRestaurants] = useState(undefined)

  useEffect(() => {
    getAPI()
  }, [props.todayValue])

  useEffect(() => {
    if (todaysRestaurant) {
      if (props.neighborhoodValue !== "all") {

        const todaysInfo = allRestaurants.filter(restaurant => restaurant.neighborhood === props.neighborhoodValue)



        setTodaysRestaurant(todaysInfo)
      } else {
        getAPI()
      }
    }
  }, [props.neighborhoodValue])

  const getAPI = () => {
    API.getRestaurants()
      .then(res => {
        let stores = res.data

        const today = props.todayValue
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
        setAllRestaurants(todaysInfo)

      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      {todaysRestaurant &&

        <div className="table-wrapper">
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

        </div>
      }
    </div>

  )
}

export default CardWrapper;