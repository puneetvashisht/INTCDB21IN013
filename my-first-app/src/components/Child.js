import React, { Component } from 'react'

export default class Child extends Component {

    reverse(){
        console.log('reverse in child component..')
        let str = this.props.caption;
        let revStr = str.split('').reverse().join('');
        this.props.textChange(revStr)
    }

    render() {
        return (
            <div>
                <h2>Child</h2>
                <p>{this.props.caption}</p>
                <button onClick={this.reverse.bind(this)}>Reverse Caption</button>
            </div>
        )
    }
}
