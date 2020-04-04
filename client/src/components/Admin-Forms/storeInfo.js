import React from 'react';
import { Form, Col, Dropdown } from 'react-bootstrap';

const StoreInfo2 = (props) => {

    if (props.storeData && props.stateList) {
        return (
            <Form className="bWingBorder2 p-2">
                <Form.Row>
                    <Col>
                        <Form.Group controlId="formCity">
                            <Form.Label className="text-left">City*</Form.Label>
                            <Form.Control 
                                name="city" 
                                type="text" 
                                placeholder="Enter City" 
                                value={props.storeData.location.city.name} 
                                onChange={props.handleCityUpdate} 
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formCity">
                            <Form.Label className="text-left">State*</Form.Label>
                            <Dropdown id="stateDropDown">
                                <Dropdown.Toggle style={{ width: "400px" }} variant="info" id="dropdown-basic">
                                    {props.stateList.filter(stateData => stateData.key === props.storeData.location.state).map(data => data.name)}
                                </Dropdown.Toggle>
                                <Dropdown.Menu id="stateMenu">
                                    {props.stateList.map(state => (
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
                            <Form.Control 
                                name="neighborhood" 
                                type="text" 
                                placeholder="Enter Neighborhood" 
                                value={props.storeData.location.city.neighborhood}
                                onChange={props.handleNeighborhoodUpdate}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formZip">
                            <Form.Label className="text-left">Zip*</Form.Label>
                            <Form.Control 
                                name="zip" 
                                type="text" 
                                placeholder="Enter Zip" 
                                value={props.storeData.location.zip}
                                onChange={props.handleZipUpdate}
                            />
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Form>
        )
    } else {
        return (
            <p>Loading.....</p>
        )
    }
}

export default StoreInfo2;