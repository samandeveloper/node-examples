//CONTINUE: 21-create-big-file.js
//read: nodejs.org>>docs>>stream>>Class:stream.Readable

//one of the methods in stream is creatReadMethod
const {createReadStream} = require('fs')
//for the createReadStream by default we only need to pass the path
// highWaterMark is the property that controls the buffer (chunk) size
const stream = createReadStream('./content/big.txt',{ highWaterMark: 90000 , encoding:'utf8' });

//we need to access to the data--we use events method to access the data
stream.on('data',(result)=>{
    console.log(result)
})  //file big.txt is 164kb and 64kb is the buffer in the terminal. this means we are ready the data in the chunck
//so instead of reading everything here we use stream to read it in chucks to read the data

// the size of the buffer:default 64kb but we can control it by sending an object in the createREadStream
// last buffer - remainder - by default buffer is 64 kb (in terminal)
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })   //the property that controls the size of the buffer is highWaterMark
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

//check for the error
stream.on('error', (err)=>{
    console.log(err)
})

