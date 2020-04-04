import React, { useState } from "react";

import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

// font awesome arrow
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

function LandingFilterDay(props) {
  const [open, setOpen] = useState(false);

  return (

    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="btn-filter__controller"
      >
        {props.buttonName} <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className={open ? ("arrow-rotate-up") : ("arrow-rotate-down")}
        />
      </Button>
      <Collapse className="mt-3" in={open}>
        <div id="example-collapse-text">

          <button
            onClick={() => props.click(0)}
            className="btn btn-filter"
          >Sunday</button>

          <button
            onClick={() => props.click(1)}
            className="btn btn-filter"
          >Monday</button>

          <button
            onClick={() => props.click(2)}
            className="btn btn-filter"
          >Tuesday</button>

          <button
            onClick={() => props.click(3)}
            className="btn btn-filter"
          >Wednesday</button>

          <button
            onClick={() => props.click(4)}
            className="btn btn-filter"
          >Thursday</button>

          <button
            onClick={() => props.click(5)}
            className="btn btn-filter"
          >Friday</button>

          <button
            onClick={() => props.click(6)}
            className="btn btn-filter"
          >Saturday</button>
        </div>
      </Collapse>
    </div>
  )
}

export default LandingFilterDay