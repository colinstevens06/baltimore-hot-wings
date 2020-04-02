import React, { useState } from "react";

import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

function LandingFilterHood(props) {
  const [open, setOpen] = useState(false);

  return (

    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {props.buttonName}
      </Button>
      <Collapse className="mt-3" in={open}>
        <div id="example-collapse-text">

          <ToggleButtonGroup type="checkbox" value={props.hoodValue} onChange={props.hoodFilter}>

            <ToggleButton
              value={"Canton"}
              className="btn btn-filter"

            >Canton</ToggleButton>

            <ToggleButton
              value={"Federal Hill"}
              className="btn btn-filter"
            >Federal Hill</ToggleButton>

            <ToggleButton
              value={"Hampden"}
              className="btn btn-filter"
            >Hampden</ToggleButton>
            <ToggleButton
              value={"Fells Point"}
              className="btn btn-filter"
            >Fells Point</ToggleButton>

          </ToggleButtonGroup>


          <br />
          <Button
            onClick={() => props.hoodFilter("all")}
            className="btn btn-filter"

          >Show All</Button>


        </div>
      </Collapse>
    </div >
  )
}

export default LandingFilterHood