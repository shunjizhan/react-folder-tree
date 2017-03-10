import React, { Component } from 'react';
import TreeNode from './TreeNode';
import FolderComponent from './FolderComponent'; 
import FileComponent from './FileComponent';

class FolderTree extends Component {
  static propTypes = {
  	data: React.PropTypes.object.isRequired,
    fileComponent: React.PropTypes.func,
    folderComponent: React.PropTypes.func, 
	};

  static defaultProps = {
    folderComponent: FolderComponent,
    fileComponent: FileComponent,
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
  	let newData = this.state.data;
  	newData.status = status;
  	this.setState({data: newData});
  }

  printSelectedFileTree() {
  	let dataDeepClone = JSON.parse(JSON.stringify(this.state.data));			
 		let selectedTree = JSON.stringify(filterAllSelected(dataDeepClone, true));
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
  const children = node.children;
  const uncheckedRoot = rootFlag && !node.status;
  const hasChildren = children && children.length > 0;                       

  if (uncheckedRoot) {                    
    return {};
  } else if (hasChildren) {
    for (let i = 0; i < children.length; i++) {
      children[i] = filterAllSelected(children[i]);
    }
    return filterNode(node);
  } else {
    return node;
  }
}

function filterNode(node) {
  const children = node.children;      
  const hasChildren = children && children.length > 0; 

  if (hasChildren) {
    let filteredChildren = [];
    for (let i = 0; i < children.length; i++) {
      if (children[i].status) {
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

function initialize(data) {       
  if (data.children) {
    for (let i = 0; i < data.children.length; i++)
      data.children[i] = initialize(data.children[i]);
  }
  data.status = 0;

  return data;
}

export default FolderTree;
