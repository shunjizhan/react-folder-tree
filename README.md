# Introduction  
This is a folder tree written in ReactJS. After feeding initial data, it will build the tree. Initially it only display the root folder. 

We can click each folder to expand it, and check (or uncheck) each folder and file. Check (or uncheck) each folder will automatically check (or uncheck) all sub-folders, including all the files in these folders. If part of the sub-folders or files in a folder are checked, this folder will display a half check.

Each time the checked folders/files change, console will print out the structure of the data tree (an object) that contains all the checked folders/files.


#To Run: 
in project root folder: 

npm install  
npm start 

project will run at: http://localhost:3000/  

#Resources
Testing data is from [here](http://codepen.io/anon/pen/Ftkln?editors=0010)

Icons are from [here](https://www.npmjs.com/package/react-fontawesome)