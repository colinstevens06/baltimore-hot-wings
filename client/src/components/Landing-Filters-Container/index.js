import React from "react";

import LandingFilters from "../Landing-Filters"



function LandingFiltersContainer(props) {

  return (

    <div>

      <LandingFilters
        buttonName={"Day of Week"}
        click={props.click}
      />

    </div>
  )
}

export default LandingFiltersContainer