import React, { Component } from 'react';


export default class AdminForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            state: '',
            neighborhood: '',
            zip: ""
        }
    }

    render() {
        return(
            <h1>Testing</h1>
        )
    };
}