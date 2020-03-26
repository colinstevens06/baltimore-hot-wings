import React from 'react';
import WingsLogo from '../../assets/images/logos/bmore-wings-logo-large.png'

//layout
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import './style.css';

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
<<<<<<< Updated upstream

    };
    this.selectItem = this.selectItem.bind(this);
    this.modal = this.modal.bind(this);
  }

=======
    };
    this.selectItem = this.selectItem.bind(this);
  }

>>>>>>> Stashed changes
  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
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
    const time = this.props.items[this.state.selectedItem]
      // setTimeout(function(time)//{
        alert (time);
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';

    return (
        <React.Fragment>
        <Row>
        <Col>
          <img className="img-fluid hero-image" src={WingsLogo} alt="BMore Wings Logo" />
          <div className="d-inline-block main-text-box">
            <h1 className="main-header">WINNER WINNER</h1>
            <div className="main-subhead"><em>Chicken Dinner!!</em></div>

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
