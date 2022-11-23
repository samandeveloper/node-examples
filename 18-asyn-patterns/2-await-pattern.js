//way1:async with .then and .catch
//Promises are the foundation of asynchronous programming in modern JavaScript. A promise is an object returned by an asynchronous function, which represents the current state of the operation. 

//the problem begins when we have multiple tasks like having readFile and writeFile
//we use .promise to show sth here but in the future we use await 

const { readFile } = require('fs')

const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        //readFile below is async
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)    //show the error
            }else{   //if we receive the data
                resolve(data)
            }
        })
    })
}

//since we returning the promise we should use .then and .catch
// getText('./content/first.txt').then(result => console.log(result))
// .catch((err)=>console.log(err))

//*************************************/
//way2:async with async() and try and catch
//the below way is async too but it's easier to use 
//Adding async at the start of a function makes it an async function--await makes the code wait until the promise is settle 

//now if we use await async in the promise we can wait until promise is settle and decide what we want to do
//for doing this we need to create a new function
//usually we don't write this function from scratch -we have it in the library and attach the async to the ready function

//the function:instead of nesting like the getText above:
const start = async()=>{
    try{
        const first = await getText('./content/first.txt')
        const second = await getText('./content/second.txt')
        console.log(first,second)
    }catch{
        console.log(error)
    }
    
}

start()