import React, { Component } from 'react'
import DropdownItem from './Dropdown.Item';

export default class Dropdown extends Component {

    constructor(){
        super();
        this.state = {show: false, options: ['Angular', 'React', 'Ember', 'NodeJS']}
    }

    handleClick(){
        console.log('click event');
        this.setState({show: !this.state.show})
    }

    selectOption(option){
        console.log('You clicked on: ', option)
        this.setState({caption: option, show: false})
        
    }

    render() {
        var optionList = this.state.options.map((option,i)=>{
            return <DropdownItem key={i} option={option} handleItemClick={this.selectOption.bind(this)}></DropdownItem>
        }) 

        return (
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" onClick={this.handleClick.bind(this)} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          { this.state.caption || 'Select courses'}
        </button>
        <ul className={this.state.show?'dropdown-menu show':'dropdown-menu'} aria-labelledby="dropdownMenuButton1">
          {optionList}
        </ul>
      </div>
        )
    }
}
