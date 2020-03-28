import React from "react";

import LandingFilterDay from "../Landing-Filter-Day"
import LandingFilterHood from "../Landing-Filter-Neighborhood"



function LandingFiltersContainer(props) {

  return (

    <div>

      <LandingFilterDay
        buttonName={"Day of Week"}
        click={props.click}
      />

      <LandingFilterHood
        buttonName={"Neighborhood"}
        hoodFilter={props.hoodFilter}
        hoodValue={props.hoodValue}
      />

    </div>
  )
}

export default LandingFiltersContainer