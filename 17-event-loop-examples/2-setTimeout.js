//setInterval is asynchronous 
//started operating system process
console.log('first')
setTimeout(()=>{
    console.log('second')
},0)
console.log('third')
//complete and exit operating system process

//answer: first third second
//although the time is 0 in the setTimeout and we expect that it runs after the first but it's not
//since setTimeout is asynchronous so even if the time is 0, it will get offloaded after the third
