import React, {useEffect, setState} from 'react';
import WingsLogo from '../../assets/images/logos/bmore-wings-logo-large.png'


//layout
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Modal from "react-bootstrap/Modal";


// layout features
import Container from 'react-bootstrap/Container';
import API from "../../utils/API.js";



import './style.css';

// set state with class component

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 3,
modal: false,
// pass restaurants down as a prop. Use restaurants object
// set state with class components
// Restaurants: ["Cardinal Tavern", "Mahaffey's Pub", "Sharky's Bar & Grill", "Hudson Street Stackhouse", "Rocket to Venus", "Frazier's on the Ave", "DogWatch Tavern", "The Horse You Came In On Saloon", "Don't Know Tavern", "Nobles Bar & Grill", ]
Restaurants: undefined
    };
    this.selectItem = this.selectItem.bind(this);
    this.modal = this.modal.bind(this);
    this.getRestaurantFunction = this.getRestaurantFunction.bind(this);
  }
  // useEffect(() => {
    getRestaurantFunction(){
    API.getRestaurants()
      .then(res => {
        let stores = res.data
        this.setState({Restaurants: stores})
        console.log(this.state.Restaurants)
      })
      .catch(err => console.log(err))
  };
  
  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.state.Restaurants.length);
      // if (this.state.onSelectItem) {
        // this.state.onSelectItem(selectedItem);
        
      // }
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
    
    // const urlMaker = "/restaurants/" + {this.state.Restaurants[this.state.selectedItem]._id}
    const { selectedItem } = this.state;
    // const { items } = this.props;
    this.getRestaurantFunction();
console.log(this.state.Restaurants)
    const wheelVars = {
      '--nb-item': 10, //[this.state.selectedItem].name.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';
    const hideModal = () => {
      this.setState({modal:false});
    };

    return (
      


        <div className="background">
        
          {this.state.Restaurants &&
          <div>
          <Modal show={this.state.modal}>
    
          
          <Modal.Header>So why don't you try:</Modal.Header>
          <Modal.Body>
      {this.state.selectedItem &&
      <Container fluid className="py-4 bg-primary">
        <a href={"/restaurants/" + this.state.Restaurants[this.state.selectedItem]._id}>{this.state.Restaurants[this.state.selectedItem].name}</a> 
          </Container>
        }
      </Modal.Body>
      
          <Modal.Footer><button onClick={hideModal}>Cancel</button></Modal.Footer>
        </Modal>
        <Row>
        <Col>
        <div className="white-bg">
          <img className="img-fluid hero-image" src={WingsLogo} alt="BMore Wings Logo" />
          <div className="d-inline-block main-text-box">
          <h1 className="main-header">Chicken Spinner!</h1>
          
          <h2 className="sub-headline">Too many choices? Can't make up your mind?</h2>
          <h2 className="sub-headline">Want to try a new spot but can't decide where?</h2>
          <h2 className="sub-headline">     </h2>
<br/>
          <h2 className="sub-headline">Let the chicken gods decide...</h2>
          <h3 className="sub-headline">just click the wheel and find your deal...</h3>
</div>
          </div>
        </Col>
      </Row>
      <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
          {this.state.Restaurants.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      </div>
  }
      </div>
    );

  }
}
