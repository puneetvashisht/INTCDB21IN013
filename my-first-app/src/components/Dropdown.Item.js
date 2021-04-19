import React, { Component } from 'react'

export default class DropdownItem extends Component {


    handleClick(){
        this.props.handleItemClick(this.props.option);
    }

    render() {
        return (
            <li ><a className="dropdown-item" onClick={this.handleClick.bind(this)} href="#">{this.props.option}</a></li>
        )
    }
}
