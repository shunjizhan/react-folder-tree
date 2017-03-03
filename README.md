# Introduction  

This is a folder tree written in ReactJS. It will build the tree after feeding data.

We can click each folder to expand it, and check (or uncheck) each folder and file. Check (or uncheck) each folder will automatically check (or uncheck) all sub-folders, including all the files in these folders. If part of the sub-folders or files in a folder are checked, this folder will display a half check.

Each time the checked folders/files change, console will print out the structure of the data tree that contains all the checked folders/files.

# Sample Tree:

![](https://github.com/shunjizhan/React-Folder-Tree/blob/master/sample.png?raw=true)


# To Install: 
npm install react-folder-tree

# To Run: 

	import React from 'react';
	import ReactDOM from 'react-dom';
	import FolderTree from 'react-folder-tree';

	const testData = YOUR DATA

	ReactDOM.render(		 	
	  <FolderTree      
	    data={testData}       
	  />,        
		document.getElementById('root')      
	)     


at this point remember to include

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

in your html page

# Data Format:	

	{				 
		id: number,    			
		filename: string,	     		
		catagory: 'file' or 'folder',	    		
		children: array of *this*	       				
	}		

# Sample Data:

	const testData = {
	  "id": 1,
	  "filename": "All Categories",
	  "category": "folder",
	  "children": [
	    {
	      "id": 2,
	      "filename": "For Sale",
	      "category": "folder",
	      "children": [
	        {
	          "id": 3,
	          "filename": "Audio & Stereo",
	          "category": "folder",
	          "children": [
	    {
	      "id": 4,
	      "filename": "For Sale",
	      "category": "folder",
	      "children": [
	        {
	          "id": 5,
	          "filename": "Audio & Stereo",
	          "category": "file"
	        },
	        {
	          "id": 6,
	          "filename": "Baby & Kids Stuff",
	          "category": "file"
	        },
	        {
	          "id": 7,
	          "filename": "Music, Films, Books & Games",
	          "category": "file"
	        }
	      ]
	    },
	    {
	      "id": 8,
	      "filename": "Motors",
	      "category": "folder",
	      "children": [
	        {
	          "id": 9,
	          "filename": "Car Parts & Accessories",
	          "category": "file"
	        },
	        {
	          "id": 10,
	          "filename": "Cars",
	          "category": "file"
	        },
	        {
	          "id": 11,
	          "filename": "Motorbike Parts & Accessories",
	          "category": "file"
	        }
	      ]
	    },
	    {
	      "id": 12,
	      "filename": "Jobs",
	      "category": "folder",
	      "children": [
	        {
	          "id": 13,
	          "filename": "Accountancy",
	          "category": "file"
	        },
	        {
	          "id": 14,
	          "filename": "Financial Services & Insurance",
	          "category": "file"
	        },
	        {
	          "id": 15,
	          "filename": "Bar Staff & Management",
	          "category": "file"
	        }
	      ]
	    }
	  ]
	        },
	        {
	          "id": 16,
	          "filename": "Baby & Kids Stuff",
	          "category": "file"
	        },
	        {
	          "id": 17,
	          "filename": "Music, Films, Books & Games",
	          "category": "file"
	        }
	      ]
	    },
	    {
	      "id": 18,
	      "filename": "Motors",
	      "category": "folder",
	      "children": [
	        {
	          "id": 19,
	          "filename": "Car Parts & Accessories",
	          "category": "file"
	        },
	        {
	          "id": 20,
	          "filename": "Cars",
	          "category": "file"
	        },
	        {
	          "id": 21,
	          "filename": "Motorbike Parts & Accessories",
	          "category": "file"
	        }
	      ]
	    },
	    {
	      "id": 22,
	      "filename": "Jobs",
	      "category": "folder",
	      "children": [
	        {
	          "id": 23,
	          "filename": "Accountancy",
	          "category": "file"
	        },
	        {
	          "id": 24,
	          "filename": "Financial Services & Insurance",
	          "category": "file"
	        },
	        {
	          "id": 25,
	          "filename": "Bar Staff & Management",
	          "category": "file"
	        }
	      ]
	    }
	  ]
	}		

# Issues:

Need to add font awesome to CSS modules so don't need to include style sheet after installation

# Resources

Testing data is from [here](http://codepen.io/anon/pen/Ftkln?editors=0010)

Icons are from [here](https://www.npmjs.com/package/react-fontawesome)