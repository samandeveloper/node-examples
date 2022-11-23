//setup a server
const http = require('http')

//way1:
// const server = http.createServer((req,res)=>{
//     res.end('welcome')
// })

//way2:using Event Emitter API
const server = http.createServer()
//emits request event
server.on('request',(req,res)=>{
    res.end('welcome')
})

// server.emit('request')   //we don't need this line
server.listen(5000)