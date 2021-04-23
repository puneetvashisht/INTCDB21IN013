// function sync(){
//     return "success";
// }

function async(callback){
    setTimeout(function(){
        console.log('async function')
        callback("success")
    }, 5000)
}


console.log('start...')

// var result = sync()
// var result = async()
// console.log(result);
async(function(res){
    console.log(res)
});

console.log('end...')