// const john = 'john'
// const peter = 'peter'

// const sayHi = (name)=>{
//     console.log(`hello there ${name}`)
// }

// sayHi('susan')
// sayHi(john)
// sayHi(peter)

//to execute>> node 3-modules.js
//answer:
//hello there susan
// hello there john
// hello there peter

// ************
//the above codes is annoying so we want to seperate the name in another file. (GO TO file number 4 and 5 for the solution)
// break the code above to three codes 3 and 4 and 5

//now for accessing john and peter from 4-names.js we use globals which is require
//so to access them we use require-inside require we should say where this data is coming from 
//ALWAYS start your module with './' (if it is two level upper start with ../)
const names = require('./4-names') 
console.log(names)   //answer:{ john: 'john', peter: 'peter' }

//conslution : as you can see in file 4-names.js we keep the secret variable local and no one have access to it.
const sayHi = require('./5-utils')

// sayHi('susan')
// sayHi(john)
// sayHi(peter)
//if we execute 3-modules.js here we receive error
//to resolve error we can write const {john,peter} instead of const names
//or we can change sayHi(john) to sayHi(names.john) --also for peter
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)


//for file number 6
const data = require('./6-alternative-flavor')
console.log(data)

//for file number 7--Note:we don't assign the require to any variable
require('./7-mind-grenade')



