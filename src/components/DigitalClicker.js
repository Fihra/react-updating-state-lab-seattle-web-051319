// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
    constructor(props){
        super(props)
        this.state = {
            timesClicked: 0
        }
    }

    addClick = () => {
        const newCount = this.state.timesClicked + 1
        this.setState({
            timesClicked: newCount
        })
    }

    render() {
        return (
            <button onClick={this.addClick.bind(this)}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker;