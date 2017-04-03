import React, { Component } from 'react';
import TreeNode from './TreeNode';
import FolderComponent from './FolderComponent';
import FileComponent from './FileComponent';
import FolderToolbar from './FolderToolbar';
import FilePane from './FilePane';
import styles from './folderTreeCSS.css'

class FolderTree extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    fileComponent: React.PropTypes.func,
    folderComponent: React.PropTypes.func,
    onChange: React.PropTypes.func,
    showToolbar: React.PropTypes.bool,
  };

  static defaultProps = {
    folderComponent: FolderComponent,
    fileComponent: FileComponent,
    showToolbar: false,
  };

  constructor(props) {
    super(props);
    this.setChildName = this.setChildName.bind(this);
    this.setSelectedPath = this.setSelectedPath.bind(this);
    this.deleteSeletedObj = this.deleteSeletedObj.bind(this);
    this.addNewFileInSelectedObj = this.addNewFileInSelectedObj.bind(this);
    this.toggleAddingNewFile = this.toggleAddingNewFile.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

    this.state = {
      data: initialize(props.data),
      checked: 0,
      selectedPath: [],   // path to selected file or folder
      showPane: true,
      numOfFiles: getNumOfFiles(props.data),
      addingNewFile: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.state.data)
      this.setState({data: initialize(nextProps.data)});
  }

  setSelectedPath(path) {
    let newData = this.state.data
    let ref = newData;
    let i = 0;
    let currentPath = this.state.selectedPath;

    // console.log('currentPath: ' + currentPath);
    while (i < currentPath.length) {
      ref = ref.children[currentPath[i]];
      i++;
    }
    ref.selected = 0;

    i = 0;
    ref = newData;
    while (i < path.length) {
      ref = ref.children[path[i]];
      i++;
    }
    ref.selected = 1;

    this.setState({
      data: newData,
      selectedPath: path,
    }, );
  }

  onChange(selectedNode) {
    const dataDeepClone = JSON.parse(JSON.stringify(this.state.data));
    const selectedTree = filterAllSelected(dataDeepClone, true);
    // this.props.onChange(dataDeepClone);
    this.props.onChange(selectedNode, selectedTree);
  }

  setChildName(path, name) {
    let newData = this.state.data;
    let ref = newData;
    let i = 0;
    while (i < path.length) {
      ref = ref.children[path[i]];
      i++;
    }
    ref.filename = name;
    this.setState({data: newData}, () => this.onChange());
  }

  deleteSeletedObj() {
    let selectedPath = this.state.selectedPath;
    let newData = this.state.data;
    let ref = newData;
    let i = 0;

    while (i < selectedPath.length - 1) {
      ref = ref.children[selectedPath[i]];
      i++;
    }

    ref.children.splice(selectedPath[i], 1);

    let parentCheckStatus = ref.status;
    if (ref.children && ref.children.length !== 0) {
      parentCheckStatus = getCheckStatus(ref);
    }

    if (ref.status !== parentCheckStatus) {
      ref.status = parentCheckStatus;
      newData = updateAllCheckStatusUp(newData, selectedPath)
    }

    this.setState(prevState => ({
      data: newData,
      selectedPath: [],
      numOfFiles: getNumOfFiles(newData),
    }), () => this.onChange());
  }

  handleCheck(path, status) {
    let newData = this.state.data;
    let ref = newData;
    let i = 0;

    while (i < path.length - 1) {
      ref = ref.children[path[i]];
      i++;
    }

    let thisNode;
    if (path.length === 0) {
      thisNode = ref;
    } else {
      thisNode = ref.children[path[i]];
    }

    const nodeClone = {...thisNode, status: thisNode.status === 1 ? 0 : 1 };

    ref.children[path[i]] = updateAllCheckStatusDown(thisNode, status);

    let parentCheckStatus = getCheckStatus(ref);
    if (ref.status !== parentCheckStatus) {
      ref.status = parentCheckStatus;
      newData = updateAllCheckStatusUp(newData, path)
    }

    this.setState(prevState => ({
      data: newData,
      numOfFiles: getNumOfFiles(newData),
    }), () => this.onChange(nodeClone));

  }

  addNewFileInSelectedObj(filename) {
    let path = this.state.selectedPath;
    let newData = this.state.data;
    let ref = newData;
    let i = 0;
    let parentStatus = 0;

    while (i < path.length) {
      ref = ref.children[path[i]];
      i++;
    }

    if (ref.status === 1)
      parentStatus = 1;
    else
      parentStatus = 0;

    const newfile = {
      id: this.state.numOfFiles + 1,
      filename: filename,
      status: parentStatus,
      selected: 0,
    };

    if (!ref.children) {
      ref.children = [];
    }

    ref.children.push(newfile);
    this.setState(prevState => ({
      data: newData,
      numOfFiles: prevState.numOfFiles + 1,
    }), () => this.onChange());
  }

  toggleAddingNewFile() {
    this.setState(prevState => ({
      addingNewFile: !prevState.addingNewFile,
    }));
  }

  render() {
    return (
      <div>
        {this.props.showToolbar && <FolderToolbar toggleAddingNewFile={this.toggleAddingNewFile} deleteObj={this.deleteSeletedObj} />}

        {this.state.addingNewFile && <FilePane addNewFile={filename => {this.addNewFileInSelectedObj(filename)}} toggleAddingNewFile={this.toggleAddingNewFile} />}

        <div className={styles.folderTree}>
          <TreeNode
            path={[]}
            level={0}
            id={this.state.data.id}
            key={this.state.data.id}
            open={this.state.data.open}
            checked={this.state.data.status}
            selected={this.state.data.selected}
            filename={this.state.data.filename}
            children={this.state.data.children || []}

            fileComponent={this.props.fileComponent}
            folderComponent={this.props.folderComponent}

            handleCheck={this.handleCheck}
            setPath={ path => { this.setSelectedPath(path) } }
            setName={ (path, name) => { this.setChildName(path, name); } }
          />
        </div>

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
  if (!data.status) {
    data.status = 0;
  }

  data.selected = 0;

  return data;
}

function updateAllCheckStatusDown(data, status) {
  const newData = data;
  const children = newData.children;

  if (children) {
    for (let i = 0; i < children.length; i++) {
      children[i] = updateAllCheckStatusDown(children[i], status);
    }
  }
  newData.status = status;
  return newData;
}

function updateAllCheckStatusUp(data, path) {
  if (path.length < 1) {
    console.log('error! path.length should be at least 1!');
    return {};
  }

  if (path.length === 1) {
    const status = getCheckStatus(data);
    data.status = status;
  } else {
    const childrenIndexToBeUpdated = path[0];
    path.splice(0, 1);

    const newChildren = updateAllCheckStatusUp(data.children[childrenIndexToBeUpdated], path);
    data.children[childrenIndexToBeUpdated] = newChildren;
  }

  data.status = getCheckStatus(data);

  return data;
}

function getCheckStatus(obj) {
  const children = obj.children;
  const length = children.length;
  let sum = 0;
  if (children) {
    for (let i = 0; i < length; i++) {
      sum += children[i].status;
    }
  }

  if (sum === 0 ) {
    return 0;
  } else if (sum === length) {
    return 1;
  } else {
    return 0.5;
  }
}

function getNumOfFiles(data) {
  let sum = 0;
  if (data.children) {
    data.children.forEach(subData => {
      sum += getNumOfFiles(subData);
    });
  } else {
    return 1;
  }
  return sum + 1;
}

export default FolderTree;
