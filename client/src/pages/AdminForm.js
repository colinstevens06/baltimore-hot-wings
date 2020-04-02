import React, { Component } from 'react';
import { Container, Accordion, Card, Button, Row } from 'react-bootstrap';
import StoreHours from '../components/Admin-Forms/storeHours';
import StoreInfo from '../components/Admin-Forms/storeInfo';
import WingPrice from '../components/Admin-Forms/wingPrice';
import API from '../utils/API';

export default class AdminForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Restaurant: ''
        }

        this.getStoreName = this.getStoreName.bind(this);
    }

    getStoreName() {
        API.getAdminStoreID()
            .then(store => {
                API.getRestaurant(store.data.storeID)
                    .then(res => {
                        this.setState({Restaurant: res.data.name})
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getStoreName();
    }

    render() {
        return (
            <Container>
                <p className="d-none">{this.state.loggedInStatus}</p>
                <h1>Editing info for {this.state.Restaurant}</h1>
                <Row>
                    <Accordion className="bWingRow bg-light justfy-content-center" defaultActiveKey="0">
                        <Card style={{ width: "50vw", height: "auto" }}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Store Information
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <StoreInfo />
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card.Header>
                        </Card>
                        <Card style={{ width: "50vw", height: "auto" }}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Store Hours
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <StoreHours />
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card.Header>
                        </Card>
                        <Card style={{ width: "50vw", height: "auto" }}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    Wing Prices
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <WingPrice />
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card.Header>
                        </Card>
                        <Card style={{ width: "50vw", height: "auto" }}>
                            <Card.Header>
                                <Button className="justify-content-center bWingButton" variant="primary" type="submit">Save Store Data</Button>
                            </Card.Header>
                        </Card>
                    </Accordion>
                </Row>
            </Container>
        )
    };
}