import React, { Component } from 'react';
import TreeNode from './TreeNode'

class FolderTree extends Component {
  static propTypes = {
  	data: React.PropTypes.object.isRequired,	
	};

	constructor(props) {
    super(props);
    this.setRootStatus = this.setRootStatus.bind(this);

    this.state = {
    	data: props.data,
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
	      	className="treeRoot"
	      	key={this.state.data.id} 
	      	category={this.state.data.category} 
	      	filename={this.state.data.filename} 
	      	children={this.state.data.children? this.state.data.children : []} 
	      	id={this.state.data.id}
	      	setChildrenStatus={this.setRootStatus}
	      	level={0} 
	      	checked={this.state.data.status}
	      />
	    )
	}
}

function filterAllSelected(node, rootFlag = false) {
  if (rootFlag && node.status === 0) {                    // if it is root and is unchecked
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
      if (children[i].status !== 0) {
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

export default FolderTree;