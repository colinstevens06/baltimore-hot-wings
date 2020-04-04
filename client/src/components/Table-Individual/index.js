import React, { useState, useEffect } from "react";
import API from "../../utils/API.js";

// layout
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'

function StoreInfo(props) {
  const id = props.id
  const [store, setStore] = useState(undefined)

  // using that ID to set the state for the retaurant's information
  useEffect(() => {
    API.getRestaurant(id)
      .then(res => setStore(res.data))
      .catch(err => console.log(err))
  }, [id])

  return (
    <div>
      <Container>
        <Table striped>
          <thead>
            <tr>
              <th>Day</th>
              <th>Pricing</th>
              <th>Hours</th>
            </tr>
          </thead>

          {store &&

            <tbody>
              <tr className={store.wings[0].isSpecial ? ("table-special") : ""}
              >
                <td className="day-of-week">{store.location.hours[0].day}</td>
                <td>${store.wings[0].price} for {store.wings[0].count} {store.wings[0].isSpecial ? <FontAwesomeIcon icon={faDrumstickBite} /> : ""}</td>
                <td>{store.location.hours[0].time}</td>
              </tr>
              <tr className={store.wings[1].isSpecial ? ("table-special") : ""}>
                <td className="day-of-week">{store.location.hours[1].day}</td>
                <td>${store.wings[1].price} for {store.wings[1].count} {store.wings[1].isSpecial ? <FontAwesomeIcon icon={faDrumstickBite} /> : ""}</td>
                <td>{store.location.hours[1].time}</td>
              </tr>
              <tr className={store.wings[2].isSpecial ? ("table-special") : ""}>
                <td className="day-of-week">{store.location.hours[2].day}</td>
                <td>${store.wings[2].price} for {store.wings[2].count} {store.wings[2].isSpecial ? <FontAwesomeIcon icon={faDrumstickBite} /> : ""}</td>
                <td>{store.location.hours[2].time}</td>
              </tr>
              <tr className={store.wings[3].isSpecial ? ("table-special") : ""}>
                <td className="day-of-week">{store.location.hours[3].day}</td>
                <td>${store.wings[3].price} for {store.wings[3].count} {store.wings[3].isSpecial ? <FontAwesomeIcon icon={faDrumstickBite} /> : ""}</td>
                <td>{store.location.hours[3].time}</td>
              </tr>
              <tr className={store.wings[4].isSpecial ? ("table-special") : ""}>
                <td className="day-of-week">{store.location.hours[4].day}</td>
                <td>${store.wings[4].price} for {store.wings[4].count} {store.wings[4].isSpecial ? <FontAwesomeIcon icon={faDrumstickBite} /> : ""}</td>
                <td>{store.location.hours[4].time}</td>
              </tr>
              <tr className={store.wings[5].isSpecial ? ("table-special") : ""}>
                <td className="day-of-week">{store.location.hours[5].day}</td>
                <td>${store.wings[5].price} for {store.wings[5].count} {store.wings[5].isSpecial ? <FontAwesomeIcon icon={faDrumstickBite} /> : ""}</td>
                <td>{store.location.hours[5].time}</td>
              </tr>
              <tr className={store.wings[6].isSpecial ? ("table-special") : ""}>
                <td className="day-of-week">{store.location.hours[6].day}</td>
                <td>${store.wings[6].price} for {store.wings[6].count} {store.wings[6].isSpecial ? <FontAwesomeIcon icon={faDrumstickBite} /> : ""}</td>
                <td>{store.location.hours[6].time}</td>
              </tr>

            </tbody>

          }
        </Table>


      </Container>
    </div>
  )
}

export default StoreInfo