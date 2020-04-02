import React, { Component } from 'react';
import update from 'immutability-helper';
import { Form, Dropdown, Col } from 'react-bootstrap';
import API from '../../utils/API';

export default class StoreHours extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hours: []
        }

        this.getStoreInfo = this.getStoreInfo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {

        //get the index so we can use it in the immutable update below
        let i = this.state.hours.findIndex(x => x.day === e.target.name);

        this.setState({
            hours: update(this.state.hours, {[i]: {time: {$set: e.target.value}}})
          })
    };

    getStoreInfo() {
        API.getAdminStoreID()
            .then((store, index) => {
                API.getRestaurant(store.data.storeID)
                    .then(res => {
                        this.setState({ hours: [...res.data.location.hours] })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getStoreInfo();
    }

    render() {
        return (
            <Form inline>
                {this.state.hours.map(data => {
                    return (
                        <Form.Group key={data.day} className='bWingBorder2 m-2 p-4' style={{ width: "250px" }}>
                            <Form.Label key={data.day} >{data.day}</Form.Label>
                            <Form.Row>
                                <Col>
                                    <Form.Control name={data.day} key={data.day} value={data.time} onChange={this.handleChange} />
                                </Col>
                            </Form.Row>
                        </Form.Group>)
                })}
            </Form>
        )
    }
}
