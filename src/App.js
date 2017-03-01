import React, { PropTypes, Component } from 'react';
import FolderTree from './Components/FolderTree';



const fileShape = PropTypes.shape({
  id: PropTypes.number,
  filename: PropTypes.string,
  category: PropTypes.oneOf(['file', 'folder']),
  // children: PropTypes.arrayOf(fileShape),
});

class App extends Component {
  static propTypes = {
    // data: PropTypes.shape(fileShape),
    data: fileShape,
    // data: PropTypes.object,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    data: testData,
    onChange: selectedFolders => console.log(selectedFolders),
  };

  render() {
    const { data, onChange } = this.props;
    return (
      <div>
        <FolderTree
          data={data}
          onChange={onChange}
          fileComponent={FileComponent}
          folderComponent={FolderComponent}
        />
      </div>
    )
  }
}

export default App;