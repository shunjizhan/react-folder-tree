import React from 'react';
import styles from './folderTreeCSS.css'

class EditableName extends React.Component {
	static propTypes = {
  filename: React.PropTypes.string.isRequired,
  setMyName: React.PropTypes.func.isRequired,
};

	constructor(props) {
    super(props);
    this.toggleEditing = this.toggleEditing.bind(this);

    this.state = {
    	editing: false,
    };
  }

  toggleEditing() {
  	this.setState(prevState => ({editing: !prevState.editing}));
  }

	render() { 
		// this.props.setMyName('*' + this.props.filename + '*')
		let input = <input type="text" name="newName" / >;

		return (	
			<span>

    		{this.state.editing? input : ' ' + this.props.filename + ' '}
    		<i className={styles.pencilIcon} onClick={this.toggleEditing} />

  		</span>
		);
	}

}


export default EditableName;