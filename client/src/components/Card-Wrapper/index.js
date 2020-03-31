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
  }, [props.todayValue, props.neighborhoodValue, props.nameSortValue])

  useEffect(() => {
    if (todaysRestaurants) {
      sortByPrice(todaysRestaurants)
      console.log(todaysRestaurants)
    }
  }, [props.priceSortValue, todaysRestaurants])

  // get all the info from the API
  const getAPI = () => {
    API.getRestaurants()
      .then(res => {
        setAllRestaurants(res.data)
        let stores = res.data
        const today = props.todayValue

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

        todaysInfo.sort(function (a, b) {
          if (b.name.toLowerCase() < a.name.toLowerCase()) {
            return 1
          } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1
          } else {
            return 0
          }
        })

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

        // // sort by name
        todaysInfo = sortByName(todaysInfo, props.nameSortValue)

        setTodaysRestaurants(todaysInfo)
      }

      if (props.neighborhoodValue) {

        if (props.neighborhoodValue === "all") {
          setTodaysRestaurants(todaysInfo)

        } else if (props.neighborhoodValue.length >= 2) {
          // going to push restaurants into this array if they match our conditions
          let filterByHood = []

          // if the neighborhoods that are selected match, put them in the array that we're going to set to state
          for (let i = 0; i < props.neighborhoodValue.length; i++) {
            for (let j = 0; j < todaysInfo.length; j++) {
              if (props.neighborhoodValue[i] === todaysInfo[j].neighborhood) {
                filterByHood.push(todaysInfo[j])
              }
            }
          }

          // sort by name
          filterByHood = sortByName(filterByHood, props.nameSortValue)

          // set state w our filtered list
          setTodaysRestaurants(filterByHood)
        } else {
          let filterByHood = todaysInfo.filter(restaurant => restaurant.neighborhood === props.neighborhoodValue.toString())

          filterByHood = sortByName(filterByHood, props.nameSortValue)

          setTodaysRestaurants(filterByHood)
        }

      }
    }
  }

  const sortByPrice = (input) => {
    console.log("sort by price")
    if (parseFloat(input[0].price) < parseFloat(input[input.length - 1].price)) {

      return input.sort(function (a, b) {
        if (parseFloat(a.price) < parseFloat(b.price)) {
          return 1
        } else if (parseFloat(b.price) < parseFloat(a.price)) {
          return -1
        } else {
          return 0
        }
      })


    } else {

      return input.sort(function (a, b) {
        if (parseFloat(b.price) < parseFloat(a.price)) {
          return 1
        } else if (parseFloat(a.price) < parseFloat(b.price)) {
          return -1
        } else {
          return 0
        }
      })
    }
  }

  const sortByName = (input, input2) => {

    if (input2) {

      return input.sort(function (a, b) {
        if (b.name.toLowerCase() < a.name.toLowerCase()) {
          return 1
        } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1
        } else {
          return 0
        }
      })

    } else {

      return input.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1
        } else if (b.name.toLowerCase() < a.name.toLowerCase()) {
          return -1
        } else {
          return 0
        }
      })

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