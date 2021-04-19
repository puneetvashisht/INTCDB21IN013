import React, { Component } from 'react'

export default class Clock extends Component {

    constructor(){
        super();
        // this.state = {today: new Date()}
    }

    render() {
        return (
            <div>
                {this.props.today.getHours()} : {this.props.today.getMinutes()} : {this.props.today.getSeconds()}
            </div>
        )
    }
}
