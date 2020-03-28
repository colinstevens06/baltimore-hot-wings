import React, { useState } from "react";

import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

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

          <Button
            onClick={() => props.hoodFilter("Canton")}
          >Canton</Button>

          <Button
            onClick={() => props.hoodFilter("Federal Hill")}
          >Federal Hill</Button>

          <Button
            onClick={() => props.hoodFilter("Hampden")}
          >Hampden</Button>

          <Button
            onClick={() => props.hoodFilter("Fells Point")}
          >Fells Point</Button>

          <Button
            onClick={() => props.hoodFilter("all")}
          >Show All</Button>

        </div>
      </Collapse>
    </div>
  )
}

export default LandingFilterHood