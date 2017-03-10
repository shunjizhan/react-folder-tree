import React, { Component } from 'react';

class TreeNode extends Component {
	static propTypes = {
  	category: React.PropTypes.string.isRequired,
  	filename: React.PropTypes.string.isRequired,
  	level: React.PropTypes.number.isRequired,
  	children: React.PropTypes.array.isRequired,
  	checked: React.PropTypes.number.isRequired,
  	id: React.PropTypes.number.isRequired,
  	setChildrenStatus: React.PropTypes.func.isRequired,
  	fileComponent: React.PropTypes.func.isRequired,
    folderComponent: React.PropTypes.func.isRequired, 
    path: React.PropTypes.array.isRequired, 
  	setName: React.PropTypes.func.isRequired,
  	setPath: React.PropTypes.func.isRequired,
	};

	constructor(props) {
    super(props);
    this.toggleFolder = this.toggleFolder.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.setChildrenStatus = this.setChildrenStatus.bind(this);
    this.setMyPath = this.setMyPath.bind(this);
    this.setMyName = this.setMyName.bind(this);

    this.state = {
    	children: props.children,
    	level: props.level,
      open: false,
    };
  }

  toggleFolder() {
  		this.setState(prevState => ({ open: !prevState.open }));
  }

  handleCheck(e) {
  	if (e.target.checked) {
  		this.props.setChildrenStatus(this.props.id, 1);
  		this.setState(this.changeAllChildrenStatus(this.state.children, 1));
  	}	else {
  		this.props.setChildrenStatus(this.props.id, 0);										// own and parent's check
  		this.setState(this.changeAllChildrenStatus(this.state.children, 0));		// children's check
  	}
  }

  /* recursively update all parent's children data */
  setChildrenStatus(id, status) {
  	let children = this.state.children;
  	if (children) {
	  	for (let i = 0; i < children.length; i++) {
	  		if (children[i].id === id)
	  			children[i].status = status;
	  	}
	  }

  	this.setState({ children: children });

  	this.props.setChildrenStatus(this.props.id, this.getCheckedStatus(status));
  }

  getCheckedStatus = (prevStatus) => {
  	if (prevStatus === 0.5) {
  		return 0.5;
  	}

  	let selectedChildrenSum = 0;
  	for (let i = 0; i < this.state.children.length; i++) {
  		selectedChildrenSum += this.state.children[i].status;
  	}

  	if (selectedChildrenSum === this.state.children.length) {
  		return 1;
  	} else if (selectedChildrenSum === 0) {
  		return 0;
  	} else {
  		return 0.5;
  	}
  }

  setMyName(name) {
  	this.props.setName(this.props.path, name);
  }

  setMyPath(path) {
  	this.props.setPath(this.props.path);
  }

 	render() {
 		const { fileComponent: FileComponent, folderComponent: FolderComponent } = this.props;
 		// console.log(FileComponent, FolderComponent)

 		if (this.props.category === 'folder') {
 			// console.log(this.props.selectedHightlight);
	 		return (
	      <div>

	      	<FolderComponent
	      		level={this.state.level}
	      		checked={this.props.checked}
	      		handleCheck={this.handleCheck}
	      		filename={this.props.filename}
	      		toggleFolder={this.toggleFolder}
	      		open={this.state.open}

	      		path={this.props.path}
	      		setMyName={this.setMyName}
	      		selectMe={this.setMyPath}

	      		selected={this.props.selected}
	      	/>

		      <ul style={{ margin: 0 }}>
		        {this.state.open &&
		        	this.state.children.map( (child, index) => {
			        	return (
			        		<TreeNode
					        	id={child.id}
					        	key={child.id}
					        	level={this.state.level + 1}
					        	category={child.category}
					        	filename={child.filename}
					        	checked={child.status}
					        	selected={child.selected}

					        	children={child.children? child.children : []}
					        	setChildrenStatus={this.setChildrenStatus}
					        	fileComponent={FileComponent}
					        	folderComponent={FolderComponent}

					        	setName={(path, name) => { this.props.setName(path, name); } }
					        	setPath={ path => { this.props.setPath(path) } }
					        	path={this.props.path.concat(index)}					        	
				        	/>
				        )
		        	})
		        }
		      </ul>

	      </div>
	    )
 		} else {
 			return (
	      <FileComponent
	    		handleCheck={this.handleCheck}
	     		checked={this.props.checked}
	     		filename={this.props.filename}
	     		level={this.state.level}

	     	  path={this.props.path}
	      	setMyName={this.setMyName}
	      	selectMe={this.setMyPath}

	      	selected={this.props.selected}
	     	/>
	    )
 		}
  }

	/* set all current and lower children's status */
	changeAllChildrenStatus(children, status) {							
		// console.log('set all childrenStatus ', status)
		for (let i = 0; i < children.length; i++) {
			if (children[i].children) {
				for (let j = 0; j < children[i].children.length; j++)
	  			children[i].children = this.changeAllChildrenStatus(children[i].children, status)
	  	}
	 		children[i].status = status;
	 	}
	 	return children;
	}

}

export default TreeNode;
