import React, { useState, useEffect } from "react";
import API from "../../utils/API.js";

import { useParams } from "react-router-dom";

// layout
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function StoreInfo() {
  const { id } = useParams()

  const [store, setStore] = useState(undefined)
  const [today, setToday] = useState(undefined)

  // using that ID to set the state for the retaurant's information
  useEffect(() => {
    API.getRestaurant(id)
      // .then(res => console.log(res.data))
      .then(res => { setStore(res.data); console.log(res.data); console.log(store) })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    const today = new Date().getDay();
    setToday(today)
  }, [])

  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <h3>Pricing</h3>
          </Col>
          <Col>
            <h3>Hours</h3>
          </Col>
        </Row >
        {store &&
          <div>

            <Row>
              <Col>
                <p><strong>{store.location.hours[0].day}</strong></p>
              </Col>
              <Col>
                <p>${store.wings[0].price} for {store.wings[0].count}</p>
              </Col>
              <Col>
                <p>{store.location.hours[0].time}</p>
              </Col>
            </Row>

            <Row>
              <Col>
                <p><strong>{store.location.hours[1].day}</strong></p>
              </Col>
              <Col>
                <p>${store.wings[1].price} for {store.wings[1].count}</p>
              </Col>
              <Col>
                <p>{store.location.hours[1].time}</p>
              </Col>
            </Row>

            <Row>
              <Col>
                <p><strong>{store.location.hours[2].day}</strong></p>
              </Col>
              <Col>
                <p>${store.wings[2].price} for {store.wings[2].count}</p>
              </Col>
              <Col>
                <p>{store.location.hours[2].time}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p><strong>{store.location.hours[3].day}</strong></p>
              </Col>
              <Col>
                <p>${store.wings[3].price} for {store.wings[3].count}</p>
              </Col>
              <Col>
                <p>{store.location.hours[3].time}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p><strong>{store.location.hours[4].day}</strong></p>
              </Col>
              <Col>
                <p>${store.wings[4].price} for {store.wings[4].count}</p>
              </Col>
              <Col>
                <p>{store.location.hours[4].time}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p><strong>{store.location.hours[5].day}</strong></p>
              </Col>
              <Col>
                <p>${store.wings[5].price} for {store.wings[5].count}</p>
              </Col>
              <Col>
                <p>{store.location.hours[5].time}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p><strong>{store.location.hours[6].day}</strong></p>
              </Col>
              <Col>
                <p>${store.wings[6].price} for {store.wings[6].count}</p>
              </Col>
              <Col>
                <p>{store.location.hours[6].time}</p>
              </Col>
            </Row>



          </div>

        }

      </Container>
    </div >
  )
}

export default StoreInfo