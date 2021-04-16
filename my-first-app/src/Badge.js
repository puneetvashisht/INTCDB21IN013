import React, { Component } from 'react'

export default class Badge extends Component {

    constructor(){
        super();
        this.state = {count: 0}
    }

    incrementCount(){
        console.log('Click event..')
        // Wrong way
        // this.state = {count: 3}

        let newCount = ++this.state.count;
        // this.state = {count: newCount}
        //Right way
        this.setState({count: newCount});
    }
    
    render() {
        console.log(this.props)
        return (
         <button type="button" onClick={this.incrementCount.bind(this)} class="btn btn-primary">
           {this.props.caption} <span class="badge bg-secondary">{this.state.count}</span>
         </button>
        )
    }
}


// function Badge() {
//     return (
//       <button type="button" class="btn btn-primary">
//         Notifications <span class="badge bg-secondary">4</span>
//       </button>
//     );
//   }
  
//   export default Badge;