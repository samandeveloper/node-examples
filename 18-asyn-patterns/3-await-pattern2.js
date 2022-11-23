//CONTINUE: 2-await-pattern.js
//we want to simplify the previous file so we use util module which has a promisify method
//also we want to add writeFile in it too (optional)

const { readFile ,writeFile } = require('fs')
//we have the module in node.js named util--this module help us to simplyify the code
const util = require('util');
const readFilePromise = util.promisify(readFile)  //in util we have method called promisify
const writeFilePromise = util.promisify(writeFile)


const start = async()=>{
    try{
        //remember to add 'utf8' since this is not the getText function (we remove the getText function) and we need to pass the encoding as a parameter
        const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFilePromise('./content/second.txt', 'utf8')
        //we can add the flag as the third parameter in the line below ({flag:'a'})
        await writeFilePromise('./content/second.txt',`THIS IS AWESOME: ${first} ${second}`)
        console.log(first,second)
    }catch{
        console.log(error)
    }
    
}

start()


//NOTE:in the above example if :
//const { readFile ,writeFile } = require('fs').promise
//then in the readFilePromise and writeFilePromise we can remove the Promise
// const first = await readFile('./content/first.txt', 'utf8')
// const second = await readFile('./content/second.txt', 'utf8')
// await writeFile('./content/second.txt',`THIS IS AWESOME: ${first} ${second}`)