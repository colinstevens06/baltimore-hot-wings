import React from "react";

import LandingFilterDay from "../Landing-Filter-Day"
import LandingFilterHood from "../Landing-Filter-Neighborhood"

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
          <div
            className="btn btn-primary btn-filter__controller"
            onClick={() => props.priceClick()}
          >Sort by Price</div>

          <LandingFilterDay
            buttonName={"Day of Week"}
            click={props.click}
          />

        </Card>
        <Card
          className="landing-sub-head-card-button"
        >

          <div
            className="btn btn-primary btn-filter__controller"
            onClick={() => props.nameClick()}
          >Sort by Name</div>

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