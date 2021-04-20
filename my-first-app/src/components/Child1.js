import React, { Component } from 'react'

export default class Child1 extends Component {


    render() {
        return (
            <div>
                <h2>Child 1</h2>
                <p>{this.props.caption}</p>
            </div>
        )
    }
}
