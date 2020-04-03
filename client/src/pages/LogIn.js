import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Form } from "react-bootstrap";
import WingsLogo from '../assets/images/logos/bmore-wings-logo-large.png'
import API from "../utils/API";

export default class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      warningBorder: '',
      warningMessage: ''
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
    try {
      //prevent input
      event.preventDefault();

      //clear the state so the UI will be normal
      this.setState({
        warningMessage: '',
        warningBorder: ''
      });

      //call our api to check the login data, async
      const results = await API.login(this.state.username, this.state.password);

      //check the results and move us on or show errors
      if (results === 'success') {
        this.props.handleLogin('LOGGED_IN');
        this.props.history.push('/admin');
      }
      else {
        this.setState({
          warningBorder: '3px solid red',
          warningMessage: 'Username or Password Invalid, please try again'
        });
      }
    }
    catch (err) {
      console.log(err);
    }
  }
  //render our page
  render() {
    if(this.state.loggedInStatus === "LOGGED_IN") {
      return(<Redirect to="/admin" />)
    }

    return (
      <div className="wings-bg-image">
        <p className="d-none">{this.state.loggedInStatus}</p>
        <Container className="bWingBorder mt-5 pb-5" style={{ width: "600px", backgroundColor: "white" }}>
          <Row className="justify-content-center">
            <img className="img-fluid hero-image" src={WingsLogo} alt="BMore Wings Logo" />
          </Row>
          <Row className="justify-content-center">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="username"
                  placeholder="Enter Email"
                  onChange={this.handleInputChange}
                  style={{ border: this.state.warningBorder }}
                />
                <Form.Text className="text-muted">
                  We will never share your email with anyone else.
              </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleInputChange}
                  style={{ border: this.state.warningBorder }}
                />
              </Form.Group>
              <Form.Text className="font-weight-bold text-danger pb-2">{this.state.warningMessage}</Form.Text>
              <button className="bWingButton" onClick={this.handleSubmit}>Submit</button>
            </Form>
          </Row>
        </Container>
      </div>
    );
  }
}
