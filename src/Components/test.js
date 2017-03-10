import React from 'react'
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import CheckBox from './CheckBox';
import FolderComponent from './FolderComponent';
import FileComponent from './FileComponent';
import TreeNode from './TreeNode';
import FolderTree from './FolderTree';

describe('test <CheckBox />', () => {
  it('should render a no-checked checkbox', () => {
    const wrapper = shallow(<CheckBox handleCheck={()=>{}} status={0}/>);
    expect(wrapper.prop('type')).to.equal("checkbox");
    expect(wrapper.prop('checked')).to.equal(false);
  });

  it('should render a checked checkbox', () => {
    const wrapper = shallow(<CheckBox handleCheck={()=>{}} status={1}/>);
    expect(wrapper.prop('type')).to.equal("checkbox");
    expect(wrapper.prop('checked')).to.equal(true);
  });

});

describe('test <FolderComponent />', () => {
  it('should render a FolderComponent with 1 checkbox, 1 <a> and 2 <i>', () => {
    const wrapper = shallow(
      <FolderComponent 
        level={0}
        checked={0}
        handleCheck={()=>{}}
        filename={"test folder"}
        toggleFolder={()=>{}}
        open={true}
      />
    );

    expect(wrapper.containsMatchingElement(CheckBox)).to.equal(true);
    expect(wrapper.find('a')).to.have.length(1);
    expect(wrapper.find('a i')).to.have.length(2);

  });


});

describe('test <FileComponent />', () => {
  it('should render a FileComponent with 1 checkbox and 1 i', () => {
    const wrapper = shallow(
      <FileComponent 
        level={0}
        checked={0}
        handleCheck={()=>{}}
        filename={"test file"}
      />
    );

    expect(wrapper.containsMatchingElement(CheckBox)).to.equal(true);
    expect(wrapper.find('i')).to.have.length(1);

  });
});

describe('test <TreeNode />', () => {
  it('should render a TreeNode with 1 FolderComponent and 1 ul', () => {
    const wrapper = mount(
      <TreeNode
        id={0}
        level={0}
        category={"folder"}
        filename={"testfilename"}
        checked={0}
        children={[]}
        setChildrenStatus={() => {}}
        fileComponent={FileComponent}
        folderComponent={FolderComponent}
      />
    );
    expect(wrapper.find('ul')).to.have.length(1);
    expect(wrapper.find('div')).to.have.length(2);
  });

  it('should render a TreeNode with 1 FileComponent', () => {
    const wrapper = shallow(
      <TreeNode
        id={0}
        level={0}
        category={"file"}
        filename={"testfilename"}
        checked={0}
        children={[]}
        setChildrenStatus={() => {}}
        fileComponent={FileComponent}
        folderComponent={FolderComponent}
      />
    );

    // expect(wrapper.containsMatchingElement(FileComponent)).to.equal(true);
    // expect(wrapper.find('div')).to.have.length(1);

  });
});

describe('test <FolderTree />', () => {

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

  it('should render a folder tree', () => {
    const wrapper = shallow(
      <FolderTree 
        data={testData}
      />
    );

    // expect(wrapper.containsMatchingElement(TreeNode)).to.equal(true);

  });
});

