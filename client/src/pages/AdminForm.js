import React, { Component } from 'react';
import { Container, Accordion, Card, Button, Row } from 'react-bootstrap';
import StoreHours2 from '../components/Admin-Forms/storeHours';
import StoreInfo2 from '../components/Admin-Forms/storeInfo';
import WingPrice2 from '../components/Admin-Forms/wingsPrice';
import API from '../utils/API';
import update from 'immutability-helper';

export default class AdminForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            storeID: '',
            storeData: '',
            saveMessage: '',
            saveClass: 'd-none',
            stateList: [],
        }

        this.getStoreName = this.getStoreName.bind(this);
        this.getStateList = this.getStateList.bind(this);
        this.handleCityUpdate = this.handleCityUpdate.bind(this);
        this.handleNeighborhoodUpdate = this.handleNeighborhoodUpdate.bind(this);
        this.handleZipUpdate = this.handleZipUpdate.bind(this);
        this.handleHoursUpdate = this.handleHoursUpdate.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleCountChange = this.handleCountChange.bind(this);
        this.handleSpecialChange = this.handleSpecialChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // All of the handle functions below will keep our state updated as the user changes values. This makes saving
    // the data massively easy. Each of these objects use the immutability helper in order to save data direct
    // into the storeData object. 
    handleCityUpdate = (data) => {
        this.setState({
            storeData: update(this.state.storeData, { location: { city: { name: { $set: data.target.value } } } })
        })
    }

    handleNeighborhoodUpdate = (data) => {
        this.setState({
            storeData: update(this.state.storeData, { location: { city: { neighborhood: { $set: data.target.value } } } })
        })
    }

    handleZipUpdate = (data) => {
        this.setState({
            storeData: update(this.state.storeData, { location: { zip: { $set: data.target.value } } })
        })
    }

    handleHoursUpdate = (data) => {
        //get the index so we can use it in the immutable update below
        let i = this.state.storeData.location.hours.findIndex(x => x.day === data.target.name);

        this.setState({
            storeData: update(this.state.storeData, { location: { hours: { [i]: { time: { $set: data.target.value } } } } })
        })
    };

    handlePriceChange = (data) => {

        //get the index so we can use it in the immutable update below
        let i = this.state.storeData.wings.findIndex(x => x.day === data.target.name);

        this.setState({
            storeData: update(this.state.storeData, { wings: { [i]: { price: { $set: data.target.value } } } })
        })
    };

    handleCountChange = (data) => {

        //get the index so we can use it in the immutable update below
        let i = this.state.storeData.wings.findIndex(x => x.day === data.target.name);

        this.setState({
            storeData: update(this.state.storeData, { wings: { [i]: { count: { $set: data.target.value } } } })
        })
    };

    handleSpecialChange = (data) => {

        //get the index so we can use it in the immutable update below
        let i = this.state.storeData.wings.findIndex(x => x.day === data.target.name);

        this.setState({
            storeData: update(this.state.storeData, { wings: { [i]: { isSpecial: { $set: data.target.checked } } } })
        })
    }

    //this will push the data to Mongo
    onSubmit() {

        //clear our UI if there was a previous save to show the new one worked
        this.setState({ saveMessage: "" });
        this.setState({ saveClass: "d-none" })

        //call the update and push the UI elements to show success
        API.updateStoreInfo(this.state.storeID, this.state.storeData)
            .then(res => {
                this.setState({ saveMessage: "Successful Update, BOK BOK" });
                this.setState({ saveClass: "text-muted" })
            })
            .catch(err => console.log(err))
    }

    //this will load our storeData state that all components will use
    getStoreName() {
        API.getAdminStoreID()
            .then(store => {
                this.setState({ storeID: store.data.storeID })
                API.getRestaurant(store.data.storeID)
                    .then(res => {
                        this.setState({ storeData: res.data })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    //load the list of US states from our API
    getStateList() {
        API.getStateList()
            .then(res => {
                this.setState({ stateList: res.data });
            })
            .catch(err => console.log(err));
    }

    //load up the data on mount
    componentDidMount() {
        this.getStoreName();
        this.getStateList();
    }

    render() {
        return (
            <div className="wings-bg-image-form pt-4">
                <Container>
                    <h1 className="main-header white-bg mt-0">{this.state.storeData.name}</h1>
                    <Row className="justify-content-center">
                        <Accordion className="bWingRow bg-light justfy-content-center" defaultActiveKey="0">
                            <Card style={{ width: "50vw", height: "auto" }}>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Store Information
                                </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <StoreInfo2
                                                storeData={this.state.storeData}
                                                stateList={this.state.stateList}
                                                handleCityUpdate={this.handleCityUpdate}
                                                handleNeighborhoodUpdate={this.handleNeighborhoodUpdate}
                                                handleZipUpdate={this.handleZipUpdate}
                                            />
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
                                            <StoreHours2
                                                storeData={this.state.storeData}
                                                handleHoursUpdate={this.handleHoursUpdate}
                                            />
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
                                            <WingPrice2
                                                storeData={this.state.storeData}
                                                handlePriceChange={this.handlePriceChange}
                                                handleCountChange={this.handleCountChange}
                                                handleSpecialChange={this.handleSpecialChange}
                                            />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card.Header>
                            </Card>
                            <Card style={{ width: "50vw", height: "auto" }}>
                                <Card.Header>
                                    <Button
                                        className="justify-content-center bWingButton"
                                        variant="primary"
                                        type="submit"
                                        onClick={this.onSubmit}
                                    >Save Store Data </Button>
                                </Card.Header>
                                <Card.Body className={this.state.saveClass} id="saveBody">
                                    <Card.Text className="text-muted" id="saveText">{this.state.saveMessage}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Accordion>
                    </Row>
                </Container>
            </div>
        )
    };
}