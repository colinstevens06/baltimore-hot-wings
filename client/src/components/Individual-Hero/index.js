// import React from "react";
import React, { useState, useEffect } from "react";
import API from "../../utils/API.js";

// BOOTSTRAP
import Jumbotron from 'react-bootstrap/Jumbotron'

function IndividualHero(props) {

  const id = props.id

  const [store, setStore] = useState(undefined)

  // using that ID to set the state for the retaurant's information
  useEffect(() => {
    API.getRestaurant(id)
      // .then(res => console.log(res.data))
      .then(res => { setStore(res.data); console.log(res.data) })
      .catch(err => console.log(err))
  }, [id])

  return (
    <div>

      {store &&

        <Jumbotron className="mt-4 mb-0">
          <h1>{store.name}</h1>
          <h2>{store.location.city.neighborhood}</h2>
          <div className="address-line">{store.location.streetLineOne}</div>
          <div className="address-line">{store.location.city.name}, {store.location.state} {store.location.zip}</div>
        </Jumbotron>

      }

    </div>
  )
}

export default IndividualHero