import React, { Component } from 'react'


const Child1 = (props)  => {
    return (
        <div>
            <h2>Child 1</h2>
            <p>{props.caption}</p>
        </div>
    )
}
export default Child1;

// export default class Child1 extends Component {


//     render() {
//         return (
//             <div>
//                 <h2>Child 1</h2>
//                 <p>{this.props.caption}</p>
//             </div>
//         )
//     }
// }
