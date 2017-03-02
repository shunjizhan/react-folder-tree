import React, { Component } from 'react';
import TreeNode from './TreeNode';
import {FileComponent, FolderComponent} from './folderAndFile'

// const testData = {
//   "id": 1,
//   "filename": "All Categories",
//   "category": "folder",
//   "children": [
//     {
//       "id": 2,
//       "filename": "For Sale",
//       "category": "folder",
//       "children": [
//         {
//           "id": 3,
//           "filename": "Audio & Stereo",
//           "category": "folder",
//           "children": [
//     {
//       "id": 4,
//       "filename": "For Sale",
//       "category": "folder",
//       "children": [
//         {
//           "id": 5,
//           "filename": "Audio & Stereo",
//           "category": "file"
//         },
//         {
//           "id": 6,
//           "filename": "Baby & Kids Stuff",
//           "category": "file"
//         },
//         {
//           "id": 7,
//           "filename": "Music, Films, Books & Games",
//           "category": "file"
//         }
//       ]
//     },
//     {
//       "id": 8,
//       "filename": "Motors",
//       "category": "folder",
//       "children": [
//         {
//           "id": 9,
//           "filename": "Car Parts & Accessories",
//           "category": "file"
//         },
//         {
//           "id": 10,
//           "filename": "Cars",
//           "category": "file"
//         },
//         {
//           "id": 11,
//           "filename": "Motorbike Parts & Accessories",
//           "category": "file"
//         }
//       ]
//     },
//     {
//       "id": 12,
//       "filename": "Jobs",
//       "category": "folder",
//       "children": [
//         {
//           "id": 13,
//           "filename": "Accountancy",
//           "category": "file"
//         },
//         {
//           "id": 14,
//           "filename": "Financial Services & Insurance",
//           "category": "file"
//         },
//         {
//           "id": 15,
//           "filename": "Bar Staff & Management",
//           "category": "file"
//         }
//       ]
//     }
//   ]
//         },
//         {
//           "id": 16,
//           "filename": "Baby & Kids Stuff",
//           "category": "file"
//         },
//         {
//           "id": 17,
//           "filename": "Music, Films, Books & Games",
//           "category": "file"
//         }
//       ]
//     },
//     {
//       "id": 18,
//       "filename": "Motors",
//       "category": "folder",
//       "children": [
//         {
//           "id": 19,
//           "filename": "Car Parts & Accessories",
//           "category": "file"
//         },
//         {
//           "id": 20,
//           "filename": "Cars",
//           "category": "file"
//         },
//         {
//           "id": 21,
//           "filename": "Motorbike Parts & Accessories",
//           "category": "file"
//         }
//       ]
//     },
//     {
//       "id": 22,
//       "filename": "Jobs",
//       "category": "folder",
//       "children": [
//         {
//           "id": 23,
//           "filename": "Accountancy",
//           "category": "file"
//         },
//         {
//           "id": 24,
//           "filename": "Financial Services & Insurance",
//           "category": "file"
//         },
//         {
//           "id": 25,
//           "filename": "Bar Staff & Management",
//           "category": "file"
//         }
//       ]
//     }
//   ]
// }

class FolderTree extends Component {
  static propTypes = {
  	// data: React.PropTypes.object.isRequired,
    // fileComponent: React.PropTypes.func.isRequired,
    // folderComponent: React.PropTypes.func.isRequired,
	};

	constructor(props) {
    // console.log('FolderTree props: ', props)
    super(props);
    this.setRootStatus = this.setRootStatus.bind(this);

    this.state = {
      data: initialize(props.data),
      // data: initialize(testData),
    	checked: 0
    };

    // console.log('finished constructing FolderTree')
  }

  setRootStatus(id, status) {
  	// console.log('set rootStatus ', status)
  	let newData = this.state.data;
  	newData.status = status;
  	this.setState({data: newData});
  }

  printSelectedFileTree() {
  	let dataCopy = JSON.parse(JSON.stringify(this.state.data));			// should exist better way to clone
 		let selectedTree = JSON.stringify(filterAllSelected(dataCopy, true));
 		console.log(selectedTree);
  }

 	render() {
 			this.printSelectedFileTree();
 			return (
	      <TreeNode
	      	key={this.state.data.id}
	      	category={this.state.data.category}
	      	filename={this.state.data.filename}
	      	children={this.state.data.children? this.state.data.children : []}
	      	id={this.state.data.id}
	      	setChildrenStatus={this.setRootStatus}
	      	level={0}
	      	checked={this.state.data.status}
          fileComponent={FileComponent}
          folderComponent={FolderComponent}
	      />
	    )
	}
}

function filterAllSelected(node, rootFlag = false) {
  if (rootFlag && !node.status) {                    // if it is root and is unchecked 
    return {};
  } else if (node.children != null && node.children.length > 0) {
    for (let i = 0; i < node.children.length; i++) {
      node.children[i] = filterAllSelected(node.children[i]);
    }
    return filterNode(node);
  } else {
    return node;
  }
}

function filterNode(node) {
  let children = node.children;                            // current node doesn't change, only filter children
  if (children != null && children.length > 0) {
    let filteredChildren = [];
    for (let i = 0; i < children.length; i++) {
      if (children[i].status) {
        // console.log('children ', children[i].id, ' is checked!')
        filteredChildren.push(children[i]);
      }
    }

    node.children = filteredChildren;
    return node;
  }
  else {
    return node;
  }
}

/* set all initial status to 0, which means unchecked */
function initialize(data) {       
  if (data.children) {
    for (let i = 0; i < data.children.length; i++)
      data.children[i] = initialize(data.children[i]);
  }
  data.status = 0;

  return data;
}

export default FolderTree;
