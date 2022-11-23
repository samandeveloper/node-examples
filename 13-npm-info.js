//npm
//When we install node.js WE AUTOMATICALLY INSTALL NPM
//npm helps us to: 1. reuse our own code in our project  2. use code written by other developers  3. share our own solution to other develpors as well
//npmjs.com
//in a node project we usually have some npm packages install as the dependancies
//these packages usually contain js code and they are reusuable codes
//npm=package=dependancy=module =>they mean the same
//for downloading the package try to choose the package that has a high weekly downloads
//if there is a bug in the package there is chance that the solution is out there

//npm - global command,comes with node
//npm --version  >> show the version of your npm
//we can install package locally->use it in particular project
//npm install <packageName>

//or install it globally and use it in any project:
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json-manifest file (stores important info about our project/package)
//three ways to create package.json:
//manual approach (create package.json in the root,create properties etc)
//automatically: npm init (step by step, press enter to skip)
//automatically: npm init -y (everything sets as default default)


//we want to install one npm package locally (e.g. lodash package)
// in terminal>>npm i lodash
//now in package.json we have the lodash as dependancy,also after this installation we also have node_modules file that stores all the dependancies
//install another npm package like bootstrap
//If we install some packages (like bootstrap) in the node_modules we can see that we have bootstrap and other packages like jquary because jquary is necessary for the bootstrap package. But you just see the bootstrap as the dependency in the package.json







