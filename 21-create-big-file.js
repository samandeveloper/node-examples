//STREAMS : node have four types of stream:readable,writable,duplex and transform

//when we have a big data it's not good to assign a big data to a variable like before
//let's create a big data

const {writeFileSync} = require('fs')
for(let i=0; i <10000 ; i++){
    writeFileSync('./content/big.txt', `hello world ${i}\n` , {flag:'a'})
}

//terminal >> node 21-create-big-file.js >>will generate the big data in big.txt under content folder
