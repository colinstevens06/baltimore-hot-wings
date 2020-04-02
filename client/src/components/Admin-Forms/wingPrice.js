import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';
import update from 'immutability-helper';
import API from '../../utils/API';

export default class WingPrice extends Component {
    constructor(props) {
        super(props)

        this.state = {

            wings: []
        }

        this.getWingInfo = this.getWingInfo.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleCountChange = this.handleCountChange.bind(this);
        this.handleSpecialChange = this.handleSpecialChange.bind(this);
    }

    handlePriceChange = (e) => {

        //get the index so we can use it in the immutable update below
        let i = this.state.wings.findIndex(x => x.day === e.target.name);

        this.setState({
            wings: update(this.state.wings, {[i]: {price: {$set: e.target.value}}})
          })
    };

    handleCountChange = (e) => {

        //get the index so we can use it in the immutable update below
        let i = this.state.wings.findIndex(x => x.day === e.target.name);

        this.setState({
            wings: update(this.state.wings, {[i]: {count: {$set: e.target.value}}})
          })
    };

    handleSpecialChange = (e) => {

        //get the index so we can use it in the immutable update below
        let i = this.state.wings.findIndex(x => x.day === e.target.name);

        this.setState({
            wings: update(this.state.wings, {[i]: {isSpecial: {$set: e.target.checked}}})
        })
    }

    getWingInfo() {
        API.getAdminStoreID()
            .then(store => {
                API.getRestaurant(store.data.storeID)
                    .then(res => {
                        this.setState({ wings: [...res.data.wings]})
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getWingInfo();
    }

    render() {
        return (
            <Form inline>
                {this.state.wings.map(wingDay => {
                    return(
                        <Form.Group key={wingDay} className='bWingBorder2 m-2 p-4' style={{ width: "250px" }}>
                            <Form.Label key={wingDay.day}>{wingDay.day}</Form.Label>
                                <Form.Row>
                                    <Col>
                                        <Form.Label>Wing Price</Form.Label>
                                        <Form.Control type="text" name={wingDay.day} value={wingDay.price} onChange={this.handlePriceChange} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Wing Count</Form.Label>
                                        <Form.Control type="text" name={wingDay.day} value={wingDay.count} onChange={this.handleCountChange} />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                        <Col>
                                            <Form.Check className="mt-1" label="Special" name={wingDay.day} type="checkbox" checked={wingDay.isSpecial} onChange={this.handleSpecialChange} />
                                        </Col>
                                    </Form.Row>
                        </Form.Group>
                    )
                })}
            </Form>
        )
    }
}