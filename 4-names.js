//solutions:modules files number 4 and 5

//local
const secret = 'SUPER SECRET'

//share
const john = 'john'
const peter = 'peter'

console.log(module)  //the answer of modules is an object and one of the items is exports:{} and we can add anything we want in it

//in order to share them we need module.exports
module.exports = {john,peter}   //ES6 -- since key and value are the same --in order to share them we need to use exports
