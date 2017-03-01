import React from 'react';
import ReactDOM from 'react-dom';
import {FileComponent, FolderComponent} from './Components/folderAndFile'

// import App from './App';
import FolderTree from './Components/FolderTree';

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

ReactDOM.render(
  <FolderTree
    data={testData}
    fileComponent={FileComponent}
    folderComponent={FolderComponent}
  />,
	document.getElementById('root')
)
