//buit-in modules:3 file--module (fs):synchronous
//Note:when it comes to file module we can do it synchrounesly or asynchronesly

const {readFileSync,writeFileSync} = require ('fs')  //const fs = require ('fs') 
console.log('start')
//now we will create two files.we create two text files first.txt and second.txt under the content folder
//readFileSync and writeFileSync will receive two parameter (path to the file and options)

//read files
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first,second)


//write files--the below line create result-sync.txt file under the content folder and write the text that we want inside it
writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`)

//in the above line if we want to repeat writing the text inside the result-sync.txt file we need to add the third parameter (flag)
//since by default in the above line we overwrite the text so we just see them once
writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`, 
{flag:'a'})

console.log('done with this task')
console.log('starting the next task')
