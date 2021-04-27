
function async(callback){
    setTimeout(function(){
        console.log('async function')
        callback("success")
    }, 5000)
}

console.log('start...')

async((res) => {
    console.log(res)
});

console.log('end...')