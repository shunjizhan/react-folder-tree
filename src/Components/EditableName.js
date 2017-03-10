import React from 'react';
import styles from './folderTreeCSS.css'

class EditableName extends React.Component {
	static propTypes = {
  filename: React.PropTypes.string.isRequired,
  setMyName: React.PropTypes.func.isRequired,
};

	constructor(props) {
    super(props);

    this.state = {
    	children: props.children,
    	level: props.level,
      open: false,
    };
  }

	render() { 
		return (	
			<span>

    		{' ' + this.props.filename + ' '}
    		<i className={styles.pencilIcon} onClick={() => { this.props.setMyName('*' + this.props.filename + '*') }} />

  		</span>
		);
	}

}


export default EditableName;