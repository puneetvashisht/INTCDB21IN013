
// async simply wraps a non-promise return into a promse

async function xyz(){
    return 1;
    await promise;
}
xyz()
// console.log(res)
.then(res=>console.log(res))

async function test(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log('async function')
            resolve("failure")
        }, 5000)
    })

    //wait for async result
   let result =  await promise;
   console.log(result)

//    return promise 
}

// function test(){
//     let promise = new Promise((resolve, reject)=>{
//         setTimeout(function(){
//             console.log('async function')
//             reject("failure")
//         }, 5000)
//     })
//    return promise 
// }

console.log('start...')

test()
// .then((data)=>{
//     console.log(data)
// })
// .catch(err=>console.log(err))

console.log('end...')