//create a bigger file than file number 21

const {writeFileSync} = require('fs')
for(let i=0; i <100000 ; i++){
    writeFileSync('./content/big.txt', `hello world ${i}\n` , {flag:'a'})
}

//the size of the big.txt file is now 1.8MB
