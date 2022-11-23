//buit in modules:3. file module (fs):asynchronous:WE NEED A CALL BACK FUNCTION IN ASYNC
//this example is also for "event loop"
//so async is better than sync method since it is not blocking the event loop

//readFile and writeFile without sync at the end means it's async
const {readFile,writeFile} = require ('fs')  
console.log('started')

readFile('./content/first.txt', 'utf8', (err,result)=>{  //readFile is asynchronous here
    if(err){
        console.log(err)
        return 
    }
    console.log(result)   
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return 
        }
        const second = result;
        //you can add the flag in the below line too--for write file in async we also need call back function at the end
        writeFile('./content/result-sync.txt',`Here is the result ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)  
            console.log('done with this task')
        })
    })
})

console.log('start the next task')