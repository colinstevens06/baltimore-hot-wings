import React, { useState, useEffect } from "react";
import API from "../../utils/API.js";
import { Link } from "react-router-dom";

// COMPONENTS
import Dropdown from 'react-bootstrap/Dropdown'

function RestaurantDropdown(props) {
  const [restaurants, setRestaurants] = useState(undefined)

  useEffect(() => {
    API.getRestaurants()
      .then(res => {
        let stores = res.data
        setRestaurants(stores)
      })
      .catch(err => console.log(err))
  }, [])

  // const handleClick = (id) => {

  // }

  return (

    <div>
      {restaurants &&

        <div>
          <Dropdown className="my-3">
            <Dropdown.Toggle id="restaurant-dropdown">
              Choose a Restaurant
            </Dropdown.Toggle>

            <Dropdown.Menu>

              {restaurants.map(restaurant => (

                <Dropdown.Item
                  key={restaurant._id}
                  as={Link}
                  to={"/restaurants/" + restaurant._id}

                >
                  {restaurant.name}


                </Dropdown.Item>

              ))}





            </Dropdown.Menu>
          </Dropdown>

        </div>

      }

    </div >
  )
}

export default RestaurantDropdown