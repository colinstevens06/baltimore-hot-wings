import React, { useState } from "react";

import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

function LandingFilterHood(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);

  const handleChange = (val) => setValue(val);

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

            <ToggleButton value={"Canton"}>Canton</ToggleButton>
            <ToggleButton value={"Federal Hill"}>Federal Hill</ToggleButton>
            <ToggleButton value={"Hampden"}>Hampden</ToggleButton>
            <ToggleButton value={"Fells Point"}>Fells Point</ToggleButton>

          </ToggleButtonGroup>

          
          <br />
          <Button
            onClick={() => props.hoodFilter("all")}
          >Show All</Button>


        </div>
      </Collapse>
    </div>
  )
}

export default LandingFilterHood