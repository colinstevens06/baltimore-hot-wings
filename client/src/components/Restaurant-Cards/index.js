import React from 'react'
import { Link } from "react-router-dom";

// COMPONENTS
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

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

          <Link to={"restaurants/" + props.id}>
            <Button className="btn-restaurant">
              Link to full info
            </Button>

          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RestaurantCard