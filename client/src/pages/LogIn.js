import React, {Component } from "react";
import { Container, Row, Form } from "react-bootstrap";
import WingsLogo from '../assets/images/logos/bmore-wings-logo-large.png'
import API from "../utils/API";

export default class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handles updating component state when the user types into the input field
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //async function to handle bad login data
  async handleSubmit(event) {
    event.preventDefault();

    const results = await API.login(this.state.username, this.state.password);

    if (results === 'success') {
      console.log('worked')
      this.props.handleLogin('LOGGED_ID');
      this.props.history.push('/');
    }
    else {
      console.log('didnt')
    }
  }

  render() {
    return (
      <Container className="bWingBorder mt-5 pb-5" style={{ width: "600px", backgroundColor: "white" }}>
        <Row className="justify-content-center">
          <img className="img-fluid hero-image" src={WingsLogo} alt="BMore Wings Logo" />
        </Row>
        <Row className="justify-content-center">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="username" placeholder="Enter Email" onChange={this.handleInputChange}></Form.Control>
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
          </Form.Text>
            </Form.Group>

            <Form.Group className="pb-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleInputChange}></Form.Control>
            </Form.Group>
            <button className="bWingButton" onClick={this.handleSubmit}>Submit</button>
          </Form>
        </Row>
      </Container>
    );
  }
}
