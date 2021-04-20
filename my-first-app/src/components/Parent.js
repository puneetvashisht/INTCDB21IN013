import React, { Component } from 'react'
import Child from './Child'
import Child1 from './Child1'

export default class Parent extends Component {

    constructor(){
        super();
        this.state = {text: 'Some text'}
    }

    handleTextChange(reversedString){
        console.log('In Parent component')
        this.setState({text: reversedString})
    }

    render() {
        return (
            <div>
                <h2>Parent</h2>
                <hr></hr>
                <Child1 caption={this.state.text}></Child1>
                <hr></hr>
                <Child caption={this.state.text} textChange={this.handleTextChange.bind(this)}></Child>
            </div>
        )
    }
}
