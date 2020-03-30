import React, {useEffect} from 'react';
import WingsLogo from '../../assets/images/logos/bmore-wings-logo-large.png'

//layout
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Modal from "react-bootstrap/Modal";


// layout features
import Container from 'react-bootstrap/Container';
import API from "../../utils/API.js";



import './style.css';

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
modal: false,
Restaurants: ["Cardinal Tavern", "Mahaffey's Pub", "Sharky's Bar & Grill", "Hudson Street Stackhouse", "Rocket to Venus", "Frazier's on the Ave", "DogWatch Tavern", "The Horse You Came In On Saloon", "Don't Know Tavern", "Nobles Bar & Grill", ]
    };
    this.selectItem = this.selectItem.bind(this);
    this.modal = this.modal.bind(this);
  }
  // useEffect(() => {
    getRestaurantFunction(){
    API.getRestaurants()
      .then(res => {
        let stores = res.data
        this.setState({Restaurants: stores})
      })
      .catch(err => console.log(err))
  }
  
  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.state.Restaurants.length);
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
        
      }
      this.setState({ selectedItem });
      setTimeout(this.modal, 4000);
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
      
    }
  }
  modal(){
    const time = this.state.Restaurants[this.state.selectedItem]
      this.setState({modal:true});
        
        // alert (time);
  }

  render() {
    
    const { selectedItem } = this.state;
    const { items } = this.props;
    // getRestaurantFunction();

    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';
    const hideModal = () => {
      this.setState({modal:false});
    };

    return (

    //   key={restaurant._id}
    //   as={Link}
    //   to={"/restaurants/" + restaurant._id}

    // >
    //   {restaurant.name}
        <React.Fragment>
          <Modal show={this.state.modal}>
          {/* <Modal show={isOpen} onHide={hideModal}> */}
          
          <Modal.Header>Tonight you should eat at:</Modal.Header>
          <Modal.Body> <Container fluid className="py-4 dark-bg">
      
          {this.state.Restaurants[this.state.selectedItem]}
      </Container></Modal.Body>
      
          <Modal.Footer><button onClick={hideModal}>Cancel</button></Modal.Footer>
        </Modal>
        <Row>
        <Col>
          <img className="img-fluid hero-image" src={WingsLogo} alt="BMore Wings Logo" />
          <div className="d-inline-block main-text-box">
          <h1 className="main-header">WINNER WINNER</h1>
          <h1 className="main-header">CHICKEN SPINNER</h1>
          <h2 className="sub-headline">Where should you eat tonight?</h2>

          </div>
        </Col>
      </Row>
      <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item}
            </div>
          ))}
        </div>
      </div>
      </React.Fragment>
    );

  }
}
