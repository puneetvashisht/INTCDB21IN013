// Read a file in using Nodejs

// Library for doing file IO
const fs = require('fs');


// Use methods available in library
// Async..
fs.readFile('public/sample.txt', (err, data)=>{
    console.log('file read...' + data);
})
// Sync
// let contents = fs.readFileSync('public/sample.txt')
// console.log('File contents: ' + contents);


console.log('Allz well that ends well')


