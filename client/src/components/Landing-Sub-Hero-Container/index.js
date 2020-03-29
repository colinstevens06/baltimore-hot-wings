import React from "react";

import LandingFilterDay from "../Landing-Filter-Day"
import LandingFilterHood from "../Landing-Filter-Neighborhood"

// layout components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


// other components
import LandingFiltersContainer from "../Landing-Filters-Container"

function LandingSubHeroContainer(props) {

  // so i can cycle through and show the correct day of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  return (



    <div className="table-wrapper">
      <Card
        style={{ width: '18rem' }}
        className="landing-sub-head-card"

      >

        {/* Display unique day of the week */}
        <h2 className="tile-header">{daysOfWeek[props.todayValue]}'s Prices</h2>
        <p className="tile-subhead"><em>Specials marked in orange</em></p>

      </Card>
      <Card
        style={{ width: '18rem' }}
        className="landing-sub-head-card"
      >

        <LandingFilterDay
          buttonName={"Day of Week"}
          click={props.click}
        />


      </Card>
      <Card
        style={{ width: '18rem' }}
        className="landing-sub-head-card"
      >

        <LandingFilterHood
          buttonName={"Neighborhood"}
          hoodFilter={props.hoodFilter}
          hoodValue={props.hoodValue}
        />

      </Card>

    </div>

  )
}


export default LandingSubHeroContainer