import React from 'react'
import { shallow } from 'enzyme';
import CheckBox from './CheckBox';
import FolderComponent from './FolderComponent';
import FileComponent from './FileComponent';
import FolderTree from './FolderTree';

describe('test <CheckBox />', () => {
  it('should render a checkbox', () => {
    const wrapper = shallow(<CheckBox handleCheck={()=>{}} status={0}/>);
    // expect(wrapper.find(Foo)).to.have.length(3);
    // console.log(wrapper.prop('type'));
    console.log(wrapper.prop('type'));
    expect(wrapper.prop('type')).to.equal("checkbox");
    // expect(wrapper.prop('type'));
  });

  // it('should render an `.icon-star`', () => {
  //   const wrapper = shallow(<CheckBox />);
  //   expect(wrapper.find('.icon-star')).to.have.length(1);
  // });

  // it('should render children when passed in', () => {
  //   const wrapper = shallow(
  //     <CheckBox>
  //       <div className="unique" />
  //     </CheckBox>
  //   );
  //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  // });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(
  //     <Foo onButtonClick={onButtonClick} />
  //   );
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick.calledOnce).to.equal(true);
  // });



});

describe('test <FolderComponent />', () => {
  it('should render a folder', () => {
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

    // console.log(wrapper);

  });
});

describe('test <FileComponent />', () => {
  it('should render a file', () => {
    const wrapper = shallow(
      <FileComponent 
        level={0}
        checked={0}
        handleCheck={()=>{}}
        filename={"test file"}
      />
    );

    // console.log(wrapper);

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

    // console.log(wrapper);

  });
});

