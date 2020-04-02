import React from "react";

import LandingFilterDay from "../Landing-Filter-Day"
import LandingFilterHood from "../Landing-Filter-Neighborhood"

// getting icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

// layout components
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';

function LandingSubHeroContainer(props) {

  // so i can cycle through and show the correct day of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  return (

    <div>
      <Container className="filter-wrapper">

        <Card
          className="landing-sub-head-card"
        >

          {/* Display unique day of the week */}
          <h2 className="tile-header">{daysOfWeek[props.todayValue]}'s Prices</h2>
          <p className="tile-subhead"><em>Specials marked in orange</em></p>

        </Card>
        <Card
          className="landing-sub-head-card-button"
        >

          {/* =============== SORT BY PRICE =============== */}
          <div
            className="btn btn-primary btn-filter__controller mb-1"
            onClick={() => props.priceClick()}
          >
            Sort by Price {(props.priceClickValue === 0) ? (
              <FontAwesomeIcon icon={faSort} />
            ) : (props.priceClickValue === 1) ? (<FontAwesomeIcon icon={faSortDown} />)
                : (<FontAwesomeIcon icon={faSortUp} />)
            }
          </div>

          <LandingFilterDay
            buttonName={"Day of Week"}
            click={props.click}
          />

        </Card>
        <Card
          className="landing-sub-head-card-button"
        >

          {/* =============== SORT BY NAME =============== */}
          <div
            className="btn btn-primary btn-filter__controller mb-1"
            onClick={() => props.nameClick()}
          >Sort by Name {(props.priceClickValue === 1 || props.priceClickValue === 2) ? (
            <FontAwesomeIcon icon={faSort} />
          ) : (props.nameSortValue === true) ? (<FontAwesomeIcon icon={faSortDown} />)
              : (<FontAwesomeIcon icon={faSortUp} />)
            }</div>

          <LandingFilterHood
            buttonName={"Neighborhood"}
            hoodFilter={props.hoodFilter}
            hoodValue={props.hoodValue}
          />

        </Card>
      </Container>


    </div>

  )
}


export default LandingSubHeroContainer