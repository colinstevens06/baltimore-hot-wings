import React from "react";

// layout components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// other components
import LandingFiltersContainer from "../Landing-Filters-Container"

function LandingSubHeroContainer(props) {

  // so i can cycle through and show the correct day of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  return (
    <div>

      <Row>
        <Col xs={6}>
          {/* Display unique day of the week */}
          <h2 className="tile-header">{daysOfWeek[props.todayValue]}'s Prices</h2>
          <p className="tile-subhead"><em>Specials marked in orange</em></p>
        </Col>

        <Col xs={6}>
          <LandingFiltersContainer
            click={props.click}
            hoodFilter={props.hoodFilter}
            hoodValue={props.hoodValue}
          />

        </Col>
      </Row>

    </div>
  )
}


export default LandingSubHeroContainer