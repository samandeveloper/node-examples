
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home Page')
    }
    if(req.url === '/about'){
        // ADD SOME BLOCKING CODE--below is a synchronous code that takes long time to execute-that's why we should use async
        for(let i=0 ; i < 1000 ; i++){
            for(let j=0 ; j < 1000 ; j++){
                console.log(`${i}${j}`)
            }
        }
        res.end('About Page')
    }
    res.end('Error page')  
})

server.listen(5000,()=>{
    console.log('server listening on port 5000...')
})

//think that we have some tabs on browser like that we have many users at the same time viewing the home and about pages
//the blocking code not only bloking the about page it's blocking the homepage too

