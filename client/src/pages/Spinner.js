import React, { useState, useEffect } from "react";


// layout features
import Container from 'react-bootstrap/Container';

// importing components


import Wheel from "../components/Spinner"
function SpinnerPage(props) {

  // United STATES
  const deals = ["Coupons", "Promotions", "Random Place", "Tina's House", "Colin's House"]

  return (
    <div>


      <div>


        <Container fluid className="py-4 dark-bg">

          <Wheel items={deals} />
        </Container>


      </div>

    </div>
  );
}

export default SpinnerPage;
