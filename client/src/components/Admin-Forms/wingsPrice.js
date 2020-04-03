import React from 'react';
import { Form, Col } from 'react-bootstrap';

const WingPrice2 = (props) => {
    if (props.storeData) {
        return (
            <Form inline>
                {props.storeData.wings.map(wingDay => {
                    return (
                        <Form.Group key={wingDay} className='bWingBorder2 m-2 p-4' style={{ width: "250px" }}>
                            <Form.Label key={wingDay.day}>{wingDay.day}</Form.Label>
                            <Form.Row>
                                <Col>
                                    <Form.Label>Wing Price</Form.Label>
                                    <Form.Control type="text" name={wingDay.day} value={wingDay.price} onChange={props.handlePriceChange} />
                                </Col>
                                <Col>
                                    <Form.Label>Wing Count</Form.Label>
                                    <Form.Control type="text" name={wingDay.day} value={wingDay.count} onChange={props.handleCountChange} />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Check className="mt-1" label="Special" name={wingDay.day} type="checkbox" checked={wingDay.isSpecial} onChange={props.handleSpecialChange} />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                    )
                })}
            </Form>
        )
    } else {
        return (
            <p>Loading....</p>
        )
    }
}

export default WingPrice2;