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
    //console.log(restaurants);
    if (allRestaurants !== undefined) {
      let filteredByDay = filterByDay(props.todayValue)
      let filteredByHood = filterByNeighborhood(filteredByDay)

      if (props.sortTypeValue === "price") {
        let sortedRestaurants = sortByPrice(props.priceSortValue, filteredByHood)
        setTodaysRestaurants(sortedRestaurants)
      } else if (props.sortTypeValue === "names") {
        let sortedRestaurants = sortByName(filteredByHood)
        setTodaysRestaurants(sortedRestaurants)
      } else {
        setTodaysRestaurants(filteredByHood)
      }
    }
  }, [props.priceSortValue, props.todayValue, allRestaurants, props.nameSortValue, props.neighborhoodValue])

  // get all the info from the API
  const getAPI = () => {
    API.getRestaurants()
      .then(res => {
        setAllRestaurants(res.data)
      })
      .catch(err => console.log(err))
  }

  const filterByDay = (today) => {

    let todaysInfo = []

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

    return todaysInfo;
  }

  const sortByPrice = (sortOrder, input) => {

    if (input) {
      let newInput = [...input];
      console.log("sort by price")
      if (sortOrder === 2) {

        console.log("high to low")

        newInput.sort(function (a, b) {
          if (parseFloat(a.price) < parseFloat(b.price)) {
            return 1
          } else if (parseFloat(b.price) < parseFloat(a.price)) {
            return -1
          } else {
            return 0
          }
        })


      } else if (sortOrder === 1) {

        console.log("low to high")

        newInput.sort(function (a, b) {
          if (parseFloat(b.price) < parseFloat(a.price)) {
            return 1
          } else if (parseFloat(a.price) < parseFloat(b.price)) {
            return -1
          } else {
            return 0
          }
        })

      } else {
        return (input)
      }

      return newInput;
    }
  }

  const sortByName = (input) => {
    // verifying input has value
    if (input) {
      let newInput = [...input];


      // if props.nameSortValue is true, make it a-z
      if (props.nameSortValue) {
        console.log('a-z')
        return newInput.sort(function (a, b) {
          if (b.name.toLowerCase() < a.name.toLowerCase()) {
            return 1
          } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1
          } else {
            return 0
          }
        })
      } else {
        console.log('z-a')
        return newInput.sort(function (a, b) {
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
  }

  const filterByNeighborhood = (input) => {
    let newInput = [...input]

    if (props.neighborhoodValue) {

      if (props.neighborhoodValue.length === 1) {
        let filterByHood = newInput.filter(restaurant => restaurant.neighborhood === props.neighborhoodValue.toString())

        filterByHood = sortByName(filterByHood, props.nameSortValue)

        return filterByHood

      } else if (props.neighborhoodValue === "all") {
        return newInput

      }

      else if (props.neighborhoodValue.length >= 2) {
        // going to push restaurants into this array if they match our conditions
        let filterByHood = []

        // if the neighborhoods that are selected match, put them in the array that we're going to set to state
        for (let i = 0; i < props.neighborhoodValue.length; i++) {
          for (let j = 0; j < newInput.length; j++) {
            if (props.neighborhoodValue[i] === newInput[j].neighborhood) {
              filterByHood.push(newInput[j])
            }
          }
        }

        // sort by name
        filterByHood = sortByName(filterByHood, props.nameSortValue)

        // set state w our filtered list
        return filterByHood

      } else {
        return newInput
      }

    } else {
      return newInput
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