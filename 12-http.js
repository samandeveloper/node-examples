//HTTP MODULE
const http = require('http')

//createServer method is a method looking for callback function with two parameters
const server = http.createServer((req,res)=>{  //req: is incoming request, res: is what we are sending back
    console.log(req)  
    if(req.url ==='/'){
        res.end('welcome to our homepage')   //.end method write what you want on your page
    }
    else if(req.url ==='/about'){
        res.end('Here is our short history') 
    }
    else{
        //if user enter the address in url that doesn't exists
        res.end(`<h1>Ooops!</h1>
        <p>we can't seem to find you page</p>
        <a href="/">back home</a>
        `)
    }
   
    // res.write('welcome to our homepage')
    // res.end()
})   //assign it to the variable and call the related method

//in the createServer method we should mention what port we are litening too
server.listen(5000)  



