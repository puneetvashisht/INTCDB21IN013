import { useState, useEffect } from 'react';

// useHttp(url, method, header){
//     // token local storage and put it Auth header
// }

export default function useCounter(increment = true) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('Effect')
           const timeInterval =  setInterval(() => {
               if(increment){
                setCounter((prevCounter)=> prevCounter + 1);
               }
               else{
                setCounter((prevCounter)=> prevCounter - 1);
               }
                
            }, 1000);
    
            // clean of side effect
            return ()=>clearInterval(timeInterval)

        // setCounter((prevCounter)=> prevCounter + 1);
    
        }, []);

    return counter;
}