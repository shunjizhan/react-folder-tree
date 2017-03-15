import React, { Component } from 'react';
import TreeNode from './TreeNode';
import FolderComponent from './FolderComponent'; 
import FileComponent from './FileComponent';
import FolderToolbar from './FolderToolbar';
import FilePane from './FilePane';

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
    this.setChildName = this.setChildName.bind(this);
    this.setSelectedPath = this.setSelectedPath.bind(this);
    this.setSelected = this.setSelected.bind(this);
    this.deleteSeletedObj = this.deleteSeletedObj.bind(this);
    this.addNewFileInSelectedObj = this.addNewFileInSelectedObj.bind(this);
    this.getNumOfFiles = this.getNumOfFiles.bind(this);

    this.state = {
      data: initialize(props.data),
      checked: 0,
      selectedPath: [],   // path to selected file or folder
      showPane: true,
      numOfFiles: this.getNumOfFiles(props.data),
    };
  }

  getNumOfFiles(data) {
    let sum = 0;
    if (data.children) {
      data.children.forEach(subData => {
        sum += this.getNumOfFiles(subData);
      });     
    } else {
      return 1;
    }
  }

  setSelectedPath(path) {
    console.log('setSelectedPath: ' + path)
    this.setSelected(this.state.selectedPath, 0);     // remove CSS from previously selected
    this.setState({selectedPath: path});              // set new path to selected
    this.setSelected(path, 1);                        // add CSS to new selected
  }

  setRootStatus(id, status) {
    const newData = {...this.state.data}
    newData.status = status;
    this.setState({data: newData});
  }

  printSelectedFileTree() {
    const dataDeepClone = JSON.parse(JSON.stringify(this.state.data));      
    const selectedTree = JSON.stringify(filterAllSelected(dataDeepClone, true));
    console.log(selectedTree);
  }

  setChildName(path, name) {
    console.log('setChildName: ', path)

    let newData = this.state.data;
    let ref = newData;
    let i = 0;                      
    while (i < path.length) {
      ref = ref.children[path[i]];  
      i++;
    }
    ref.filename = name;
    this.setState({data: newData});
  }

  setSelected(path, status) {
    let newData = this.state.data;
    let ref = newData;
    let i = 0;   
    while (i < path.length) {
      ref = ref.children[path[i]];  
      i++;
    }
    ref.selected = status;
    this.setState({data: newData});
  }

  deleteSeletedObj() {
    let path = this.state.selectedPath;
    let newData = this.state.data;
    let ref = newData;
    let i = 0;   
    while (i < path.length - 1) {
      ref = ref.children[path[i]];  
      i++;
    }
    // delete ref.[path[0]]
    console.log("deleting: " + JSON.stringify(ref.children[path[i]]));
    ref.children.splice(path[i], 1);
    this.setState({
      data: newData,
      selectedPath: [],
    });
  }

  addNewFileInSelectedObj(filename) {
    console.log('add new file!!!!' + filename);
    let path = this.state.selectedPath;
    let newData = this.state.data;
    let ref = newData;
    let i = 0;   
    while (i < path.length) {
      ref = ref.children[path[i]];  
      i++;
    }

    const newfile = {
      id: 99,           // TODO: how to set unique id, maybe keep track of number of files
      filename: filename,
      category: 'file',
    };

    ref.children.push(newfile);
    this.setState({
      data: newData,
    });
  }

  render() {
      this.printSelectedFileTree();
      return (
        <div>
          <TreeNode
            key={this.state.data.id}

            category={this.state.data.category}
            filename={this.state.data.filename}
            children={this.state.data.children || []}
            id={this.state.data.id}
            setChildrenStatus={this.setRootStatus}
            level={0}
            checked={this.state.data.status}
            selected={this.state.data.selected}
            fileComponent={this.props.fileComponent}
            folderComponent={this.props.folderComponent}

            setName={ (path, name) => { this.setChildName(path, name); } }
            setPath={ path => { this.setSelectedPath(path) } }
            path={[]}
          />

          <FolderToolbar addObj={()=>{}} deleteObj={this.deleteSeletedObj} />

          {this.state.showPane && <FilePane addNewFile={filename => {this.addNewFileInSelectedObj(filename)}} onCancel={()=>{}} />}

        </div>
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
  data.selected = 0;

  return data;
}

export default FolderTree;
