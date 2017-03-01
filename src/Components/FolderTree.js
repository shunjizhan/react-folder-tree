import React, { Component } from 'react';
import TreeNode from './TreeNode';
// import {FileComponent, FolderComponent} from './Components/folderAndFile'

class FolderTree extends Component {
  static propTypes = {
  	data: React.PropTypes.object.isRequired,
    fileComponent: React.PropTypes.func.isRequired,
    folderComponent: React.PropTypes.func.isRequired,
	};

	constructor(props) {
    super(props);
    this.setRootStatus = this.setRootStatus.bind(this);

    this.state = {
    	data: initialize(props.data),
    	checked: 0
    };
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
          fileComponent={this.props.fileComponent}
          folderComponent={this.props.folderComponent}
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
