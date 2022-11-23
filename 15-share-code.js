//to share our code, we can use the github so go to github and create a new repository
//now here create a file name ".gitignore"
//what .gitignore file do? when we want to push our project to the github we know that node_module is too big
//in .gitignore file we can say ignore the node_module folder to send to github (or any other files)

//now in the terminal:
//git init
//git add .
//git commit -m "first commit"
//git branch -M main
// git remote add origin <github path>
// git push -u origin main


//question: if we didn't send the node_modules to the github how the npm packages in our project will work?
 //answer: when we git clone our project (our package.json includs our dependancies like lodash) we just need to "npm install" the project to install the node_modules folder
 //npm ckeck for the packages in the dependancies in package.json and install them
 

