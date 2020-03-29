import React from "react";

import LandingFilterDay from "../Landing-Filter-Day"
import LandingFilterHood from "../Landing-Filter-Neighborhood"

// layout components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function LandingFiltersContainer(props) {

  return (

    <div>

      <Row>
        <Col>
          <h3 className="text-light">Filters</h3>
        </Col>
      </Row>
      <Row>

        <Col sm={6}>
          <LandingFilterDay
            buttonName={"Day of Week"}
            click={props.click}
          />

        </Col>
        <Col sm={6}>

          <LandingFilterHood
            buttonName={"Neighborhood"}
            hoodFilter={props.hoodFilter}
            hoodValue={props.hoodValue}
          />

        </Col>


      </Row>

    </div>
  )
}

export default LandingFiltersContainer