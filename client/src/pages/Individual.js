import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import { Link, useParams } from "react-router-dom";

// layout features
import Container from 'react-bootstrap/Container';

function IndividualPage(props) {

  const [restaurant, setRestaurant] = useState({})

  const { id } = useParams()
  useEffect(() => {
    API.getRestaurant(id)
      .then(res => setRestaurant(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Container>
        <h1>Hi, welcome to {restaurant.name}</h1>
        {console.log(restaurant)}

      </Container>
    </div>
  )
}


export default IndividualPage