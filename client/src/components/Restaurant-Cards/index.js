import React from 'react'
import { Link } from "react-router-dom";

// COMPONENTS
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function RestaurantCard(props) {
  return (
    <div>
      <Card
        className={props.isSpecial ? ("isSpecial store-card") : ("store-card")}
      >
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 card-neighborhood">{props.neighborhood}</Card.Subtitle>
          <Card.Text>
            {props.hours}
          </Card.Text>
          <Card.Text className="card-price">${props.price} for {props.count}</Card.Text>

          <Link to={"restaurants/" + props.id}>
            <Button className="btn-restaurant">
              Link to full info
            </Button>

          </Link>
        </Card.Body>
      </Card>


      <div
        className={props.isSpecial ? ("store-row isSpecial") : ("store-row")}
      >
        <div className="store-row__1">
          <div className="store-row__head"><strong>{props.name}</strong>, {props.neighborhood}</div>
        </div>

        <div className="store-row__2">
          <div className={"store-row__price"}>${props.price} for {props.count}</div>
          <Link to={"restaurants/" + props.id}>
            <button className="btn btn-restaurant">
              Link to full info
            </button>

          </Link>
        </div>
      </div>


    </div>
  )
}

export default RestaurantCard