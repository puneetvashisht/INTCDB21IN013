import {useState, useEffect} from 'react';

export default function Increment(){
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        console.log('Effect...', prevCounter)
        setInterval(()=>{
            setCounter(counter + 1);
        },1000)
    }, [])

   

    return (
        <h2>Counter {counter}</h2>
    )
}