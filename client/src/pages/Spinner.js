import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";


// layout features
import Container from 'react-bootstrap/Container';

// importing components


import Wheel from "../components/Spinner"
function SpinnerPage(props) {

  // United STATES
  const deals = ["Cardinal Tavern", "Mahaffey's Pub", "Sharky's Bar & Grill", "Hudson Street Stackhouse", "Rocket to Venus", "Frazier's on the Ave", "DogWatch Tavern", "The Horse You Came In On Saloon", "Don't Know Tavern", "Nobles Bar & Grill", ]

  return (
    <div>


      <div>


       
        <Modal show={false}>
          
    <Modal.Header>Hi</Modal.Header>
    <Modal.Body> <Container fluid className="py-4 dark-bg">

<Wheel items={deals} />
</Container></Modal.Body>

    <Modal.Footer>This is the footer</Modal.Footer>
  </Modal>
        


      </div>

    </div>
  );
}

export default SpinnerPage;
