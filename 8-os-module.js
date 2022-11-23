//buit in modules:1.OPERATING SYSTEM (os)

//in built in modules we don't need to give an address--in the require we just need a name
const os = require('os')  //this way node understand that you are looking for build in modules
//info about the current user
const user = os.userInfo()   //userInfo() is the method 
console.log(user)

//method returns the system uptime in seconds
console.log(`The system uptime is  ${os.uptime()} seconds`)

//some other methods
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),  //total memory
    freeMem : os.freemem(),    //free memory
}
console.log(currentOS)


