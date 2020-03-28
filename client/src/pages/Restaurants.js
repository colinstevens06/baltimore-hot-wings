import React, { useState, useEffect } from "react";
import API from "../utils/API.js";

// layout features
import Container from 'react-bootstrap/Container';

// importing components
import HeroLanding from "../components/Landing-Hero"
import CardWrapper from "../components/Card-Wrapper"
import LandingSubHeroContainer from "../components/Landing-Sub-Hero-Container"

function RestaurantPage(props) {

  const [today, setToday] = useState(undefined)

  useEffect(() => {
    const findDate = new Date().getDay()
    setToday(findDate)
  }, [])

  const dayOfWeekFilter = input => {
    setToday(input)
  }

  return (
    <div>
      {(today || today === 0) &&
        <div>
          <Container>
            <HeroLanding />
          </Container>


          <Container fluid className="py-4 dark-bg">
            <Container>
              <LandingSubHeroContainer
                todayValue={today}
                click={dayOfWeekFilter} />

              <CardWrapper todayValue={today} />

            </Container>
          </Container>


        </div>
      }


    </div>
  );
}

export default RestaurantPage;