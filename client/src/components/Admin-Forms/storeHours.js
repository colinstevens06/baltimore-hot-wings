import React from 'react';
import { Form, Col } from 'react-bootstrap';

const StoreHours2 = (props) => {
    if (props.storeData) {
        return (
            <Form inline>
                {props.storeData.location.hours.map(data => {
                    return (
                        <Form.Group key={data.day} className='bWingBorder2 m-2 p-4' style={{ width: "250px" }}>
                            <Form.Label key={data.day} >{data.day}</Form.Label>
                            <Form.Row>
                                <Col>
                                    <Form.Control name={data.day} key={data.day} value={data.time} onChange={props.handleHoursUpdate} />
                                </Col>
                            </Form.Row>
                        </Form.Group>)
                })}
            </Form>
        )
    } else {
        return (
            <p>Loading.....</p>
        )
    }
}

export default StoreHours2;