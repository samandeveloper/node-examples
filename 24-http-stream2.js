//continue 23
var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    const text = fs.read('./content/big.txt', 'utf8')
    res.end(text)
})
.listen(5000)   //send the big.txt content to port 5000


//open localhost:5000 then right click>>inspect>> network tab>> localhost size is 1.8MB 
//click on the loclahost>>general>>content-length: 1788890 and method is GET
//it's not wise to send this size of file 

//solution in 25

