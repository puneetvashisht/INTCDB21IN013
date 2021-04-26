const http = require('http');
const fs = require('fs');


var contents = fs.readFileSync('serverconf.json');
console.log('contents: '+ contents)
// parse string to json
var contentsJson = JSON.parse(''+contents);
console.log('port: '+ contentsJson.port)

let server  = http.createServer((req,res)=>{
    console.log(req.url);
    let url = 'public' + req.url;
    console.log('formed url' + url);

    if(req.url !== 'favicon.ico'){
        fs.readFile(url, (err, data)=>{
            if(err){
                res.statusCode = 404;
                res.end("Not found");
            }  
            else{
                res.write('' + data)
                res.end();
            }  
            
        })
    }
    else{
        res.end();
    }
    // res.end();
    
})

// let port = 3001
server.listen(contentsJson.port, ()=>console.log(`listening on port ${contentsJson.port}`))