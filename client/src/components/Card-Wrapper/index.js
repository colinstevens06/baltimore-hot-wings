import React, { useState, useEffect } from "react";
import API from "../../utils/API";

// importing components
import RestaurantCard from "../Restaurant-Cards";

function CardWrapper(props) {
  const [todaysRestaurants, setTodaysRestaurants] = useState(undefined)
  const [allRestaurants, setAllRestaurants] = useState(undefined)

  useEffect(() => {
    getAPI()
  }, [])

  useEffect(() => {
    changeInfo()
  }, [props.todayValue, props.neighborhoodValue])

  const getAPI = () => {
    API.getRestaurants()
      .then(res => {
        setAllRestaurants(res.data)
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
        setTodaysRestaurants(todaysInfo)
      })
      .catch(err => console.log(err))
  }

  const changeInfo = () => {

    const today = props.todayValue
    let todaysInfo = []

    if (allRestaurants) {

      for (let i = 0; i < allRestaurants.length; i++) {
        let storeInfo = {
          "id": allRestaurants[i]._id,
          "name": allRestaurants[i].name,
          "neighborhood": allRestaurants[i].location.city.neighborhood,
          "hours": allRestaurants[i].location.hours[today].time,
          "price": allRestaurants[i].wings[today].price,
          "count": allRestaurants[i].wings[today].count,
          "isSpecial": allRestaurants[i].wings[today].isSpecial,
          "day": allRestaurants[i].wings[today].day
        }

        todaysInfo.push(storeInfo)
        setTodaysRestaurants(todaysInfo)
      }

      if (props.neighborhoodValue) {

        if (props.neighborhoodValue === "all") {
          setTodaysRestaurants(todaysInfo)



        } else if (props.neighborhoodValue.length >= 2) {



          console.log("hitting the greater than 1 filter")

          let filterByHood = []

          for (let i = 0; i < props.neighborhoodValue.length; i++) {

            for (let j = 0; j < todaysInfo.length; j++) {

              console.log("todaysInfo inside the for loop")
              console.log(todaysInfo)


              if (props.neighborhoodValue[i] === todaysInfo[j].neighborhood) {


                filterByHood.push(todaysInfo[j])
              }

            }
          }
          setTodaysRestaurants(filterByHood)

          // const filterByHood = todaysInfo.filter(restaurant => restaurant.neighborhood === props.neighborhood
          // )

          // console.log(filterByHood)

          // setTodaysRestaurants(filterByHood)

        } else {
          console.log("hitting the else filter underneath the greater than 1 filter")
          const filterByHood = todaysInfo.filter(restaurant => restaurant.neighborhood === props.neighborhoodValue.toString())
          setTodaysRestaurants(filterByHood)
        }

      }
    }
  }

  return (
    <div>
      {todaysRestaurants &&

        <div className="table-wrapper">
          {todaysRestaurants.map(store => (
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