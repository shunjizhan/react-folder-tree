# Introduction  

This is a folder tree written in ReactJS. 

We can do:

- click each carat to expand/collapse the folder
- click the checkbox to (un)check each folder and file. [(un)check each folder will automatically (un)check all sub-folders, including all the files in these folders. If part of the sub-folders or files in a folder are checked, this folder will display a half check. Each time the checked folders/files change, console will print out the structure of the data tree that contains all the checked folders/files.]
- click the folder/file name to select it, and it will be hightlighted in blue
- click the pencil beside the folder/file to rename it
- click the delete button to delete the selected folder/file
- click the Add button to add new file in the selected folder/file. [Adding a file-2 to a file-1 will change file-1 to a folder; if all sub folder/files of a folder are deleted, this folder will become a file.]

# Sample Tree:

![](https://raw.githubusercontent.com/shunjizhan/React-Folder-Tree/add-file-functionality/sample.png?raw=true)


# To Install: 
	npm install --save react-folder-tree

# To Run: 

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

Remember to include the above link in your html page. Otherwise the icons won't show up. (Currently working on CSS modules so that in the future we don't need to include this link anymore)

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

# Data Format:	

	{				 
		id: number,    			
		filename: string,	     		
		children: array of *this*	  [optional]    				
	}		

# Sample Data:

	const testData = {
	  "id": 1,
	  "filename": "All Categories",
	  "children": [
	    {
	      "id": 2,
	      "filename": "For Sale",
	      "children": [
	        {
	          "id": 3,
	          "filename": "Audio & Stereo",
	          "children": [
	    {
	      "id": 4,
	      "filename": "For Sale",
	      "children": [
	        {
	          "id": 5,
	          "filename": "Audio & Stereo",
	        },
	        {
	          "id": 6,
	          "filename": "Baby & Kids Stuff",
	        },
	        {
	          "id": 7,
	          "filename": "Music, Films, Books & Games",
	        }
	      ]
	    },
	    {
	      "id": 8,
	      "filename": "Motors",
	      "children": [
	        {
	          "id": 9,
	          "filename": "Car Parts & Accessories",
	        },
	        {
	          "id": 10,
	          "filename": "Cars",
	        },
	        {
	          "id": 11,
	          "filename": "Motorbike Parts & Accessories",
	        }
	      ]
	    },
	    {
	      "id": 12,
	      "filename": "Jobs",
	      "children": [
	        {
	          "id": 13,
	          "filename": "Accountancy",
	        },
	        {
	          "id": 14,
	          "filename": "Financial Services & Insurance",
	        },
	        {
	          "id": 15,
	          "filename": "Bar Staff & Management", 
	        }
	      ]
	    }
	  ]
	        },
	        {
	          "id": 16,
	          "filename": "Baby & Kids Stuff",
	        },
	        {
	          "id": 17,
	          "filename": "Music, Films, Books & Games",
	        }
	      ]
	    },
	    {
	      "id": 18,
	      "filename": "Motors",
	      "children": [
	        {
	          "id": 19,
	          "filename": "Car Parts & Accessories",
	        },
	        {
	          "id": 20,
	          "filename": "Cars",
	        },
	        {
	          "id": 21,
	          "filename": "Motorbike Parts & Accessories",
	        }
	      ]
	    },
	    {
	      "id": 22,
	      "filename": "Jobs",
	      "children": [
	        {
	          "id": 23,
	          "filename": "Accountancy",
	        },
	        {
	          "id": 24,
	          "filename": "Financial Services & Insurance",
	        },
	        {
	          "id": 25,
	          "filename": "Bar Staff & Management", 
	        }
	      ]
	    }
	  ]
	}

# Resources

Testing data is from [here](http://codepen.io/anon/pen/Ftkln?editors=0010)

Icons are from [here](https://www.npmjs.com/package/react-fontawesome)

# TODO
- when add or delete a file, new to update it's parents selected status
- css modules of font awesome
- pencil only show on hover
- fully test all funtionalities