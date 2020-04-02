import React, { Component } from 'react';
import { Form, Col, Dropdown } from 'react-bootstrap';
import API from '../../utils/API';

export default class StoreInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            city: '',
            state: 'State',
            neighborhood: '',
            zip: '',
            stateList: []
        }

        this.getStateList = this.getStateList.bind(this);
        this.select = this.select.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getStoreInfo = this.getStoreInfo.bind(this);
    }

    // Handles updating component state when the user types into the input field
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    select(eventKey, event) {
        this.setState({
            state: eventKey
        });
    }

    getStoreInfo() {
        API.getAdminStoreID()
            .then(store => {
                API.getRestaurant(store.data.storeID)
                    .then(res => {
                        this.setState({ city: res.data.location.city.name })
                        this.setState({ neighborhood: res.data.location.city.neighborhood })
                        this.setState({ zip: res.data.location.zip})
                        this.setState({ state: this.state.stateList.filter((val) => {
                            return val.key === res.data.location.state;
                        })[0].name})
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    getStateList() {
        API.getStateList()
            .then(res => {
                this.setState({ stateList: res.data });
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getStateList();
        this.getStoreInfo();
    }

    render() {
        return (
            <Form className="bWingBorder2 p-2">
                <Form.Row>
                    <Col>
                        <Form.Group controlId="formCity">
                            <Form.Label className="text-left">City*</Form.Label>
                            <Form.Control name="city" type="text" placeholder="Enter City" value={this.state.city} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formCity">
                            <Form.Label className="text-left">State*</Form.Label>
                            <Dropdown id="stateDropDown" onSelect={this.select.bind(this)} >
                                <Dropdown.Toggle style={{ width: "400px" }} variant="info" id="dropdown-basic">
                                    {this.state.state}
                                </Dropdown.Toggle>
                                <Dropdown.Menu id="stateMenu">
                                    {this.state.stateList.map(state => (
                                        <Dropdown.Item key={state.key} eventKey={state.name}>{state.name}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="formNeighborhood">
                            <Form.Label className="text-left">Neighborhood</Form.Label>
                            <Form.Control name="neighborhood" type="text" placeholder="Enter Neighborhood" value={this.state.neighborhood} onChange={this.handleInputChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formZip">
                            <Form.Label className="text-left">Zip*</Form.Label>
                            <Form.Control name="zip" type="text" placeholder="Enter Zip" value={this.state.zip} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}