//continue file number 24
//solution for the big data is to use the stream

var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    // const text = fs.read('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt' , 'utf8')
    //now we have access to the event method--if we receive data
    fileStream.on('open',()=>{  //Event:open
        fileStream.pipe(res)  //pipe method (a method in stream):pushing from readstream to the writestream
    })
    //if we receive error
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})
.listen(5000)   



//check answer on localhost:5000 then inspect>>network>>click on localhost>>headers>>still have GET and same size file but
//transfer-encoding: chunked
//so instead of sending file back in one lage instance we are sending it back in chuncks