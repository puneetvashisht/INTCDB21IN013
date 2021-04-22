import React, { useState, useEffect } from 'react'
import Child from './Child'
import Child1 from './Child1'



const Parent = (props) =>{
  
    // constructor(){
    //     this.state = {text: 'Some text'}
    // }
    const [text, setText] = useState('Some text');
    // const [employees, setEmployees] = useState([]);

    // componentDidMount() {
    //     this.setState({text: 'New text'})
    // }
    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
        setText('New text');
    }, []);


    const handleTextChange = (reversedString) => {
        console.log('In Parent component')
        // this.setState({text: reversedString})
        setText(reversedString);
    }

    return (
        <div>
                <h2>Parent</h2>
                 <hr></hr>
                 <Child1 caption={text}></Child1>                 
                 <hr></hr>
                 <Child caption={text} textChange={handleTextChange}></Child>

        </div>
    )
}
export default Parent;


// export default class Parent extends Component {

//     constructor(){
//         super();
//         this.state = {text: 'Some text'}
//     }

//     handleTextChange(reversedString){
//         console.log('In Parent component')
//         this.setState({text: reversedString})
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Parent</h2>
//                 <hr></hr>
//                 <Child1 caption={this.state.text}></Child1>
//                 <hr></hr>
//                 <Child caption={this.state.text} textChange={this.handleTextChange.bind(this)}></Child>
//             </div>
//         )
//     }
// }
