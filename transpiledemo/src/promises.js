function async(){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log('async function')
            // resolve('success')
            reject('failure')
        }, 5000)
    }) 
}


console.log('start...')

// var result = sync()
// var result = async()
// console.log(result);
async()
.then(res=>console.log(res))
.catch(err=>console.log(err))

console.log('end...')