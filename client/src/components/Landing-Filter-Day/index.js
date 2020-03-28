import React, { useState } from "react";

import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

function LandingFilterDay(props) {
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
            onClick={() => props.click(0)}
          >Sunday</Button>

          <Button
            onClick={() => props.click(1)}
          >Monday</Button>

          <Button
            onClick={() => props.click(2)}
          >Tuesday</Button>

          <Button
            onClick={() => props.click(3)}
          >Wednesday</Button>

          <Button
            onClick={() => props.click(4)}
          >Thursday</Button>

          <Button
            onClick={() => props.click(5)}
          >Friday</Button>

          <Button
            onClick={() => props.click(6)}
          >Saturday</Button>
        </div>
      </Collapse>
    </div>
  )
}

export default LandingFilterDay