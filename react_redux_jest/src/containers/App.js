import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionExample } from '../actions';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div>Example of App</div>
    }
}

function mapStateToProp(state) {
    return {
    };
}

export default connect(mapStateToProp, { actionExample })(App);
