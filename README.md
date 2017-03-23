# Introduction  

This is a folder tree written in ReactJS. 

We can do:

- click each carat to expand/collapse the folder
- click the checkbox to (un)check each folder and file. (un)check each folder will automatically (un)check all sub-folders, including all the files in these folders. If part of the sub-folders or files in a folder are checked, this folder will display a half check. 
- click the folder/file name to select it, and it will be hightlighted in blue
- click the pencil beside the folder/file to rename it
- click the delete button to delete the selected folder/file
- click the Add button to add new file in the selected folder/file. Adding a file-2 to a file-1 will change file-1 to a folder; if all sub folder/files of a folder are deleted, this folder will become a file. The new file's check status is same as its parent

# Props
- data: initial data to construct the tree. Sample data can be found [below](#sample-data)
- onChange(data): It will call this function after any of these four actions: (un)check, add, delete, or rename. Where data is the object representing the tree of all selected files/folders (filtered out all unchecked files/folders).
- FileComponent & FolderComponent: you can inject your own components here. Default file/folder component is already provided.

# Sample Tree:

![](https://raw.githubusercontent.com/shunjizhan/React-Folder-Tree/master/folder-tree-demo.gif?raw=true)


# To Install: 
	npm install --save react-folder-tree

# To Run: 

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

Remember to include the above link in your html page. Otherwise the icons won't show up. (Currently working on CSS modules so that in the future we don't need to include this link anymore)

	import React from 'react';
	import ReactDOM from 'react-dom';
	import FolderTree from 'react-folder-tree';

	const testData = YOUR DATA;

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
- css modules of font awesome
- in editing mode the inputbox doesn't hover automatically
- press enter to confirm (now must click the confirm icon)
- fully test all funtionalities
- change structure: since now each Treenode has path, there should exist more concise way to handle check
- remove excessive dependencies