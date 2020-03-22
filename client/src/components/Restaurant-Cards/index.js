import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";


import "./style.css"

function RestaurantCard(props) {
  return (
    <div>
      <Card style={{ width: '18rem' }}
        className={props.isSpecial ? ("isSpecial") : ("")}
      >
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2">{props.neighborhood}</Card.Subtitle>
          <Card.Text>
            {props.hours}
          </Card.Text>
          <Card.Text>${props.price} for {props.count}</Card.Text>
          {/* <Card.Link href={props.link}>Link to full info</Card.Link> */}
          <Link to={"restaurants/" + props.id}>Link to full info</Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RestaurantCard