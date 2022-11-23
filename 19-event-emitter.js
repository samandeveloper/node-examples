//events module--emit and on are two famous methods for event 
//emit is used to trigger an event and on method, listens for an event
//Note1: the order is important-first we listen to the event then we emit the event

//EventEmitter is a class
const EventEmitter = require('events')
//for receiving the instance of our class--we have the object
const customEmitter = new EventEmitter();
 //name of event (response)--second argumenent is callback function
 //in the on method we pass the string (name of the event) as well as call back function
customEmitter.on('response',(name,id)=>{
    console.log(`data received ${name} with id:${id}`)
}) 

//NOTE2: we can have as many functions as we want here:
// customEmitter.on('response',()=>{
//     console.log(`some other logic`)
// }) 

//after receiving the data we want to emit it
//in the emit method we pass the SAME STRING as on method
customEmitter.emit('response')

//Note3: we can pass the argument when we are emitting the event--so we have to add them in emit and call back function
customEmitter.emit('response','john',34)