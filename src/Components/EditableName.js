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
    this.handleChangeName = this.handleChangeName.bind(this);

    this.state = {
    	editing: false,
    };
  }

  toggleEditing() {
  	this.setState(prevState => ({editing: !prevState.editing}));
  }

  handleChangeName(e) {
  	this.props.setMyName(e.target.value);
  }

	render() { 
		// this.props.setMyName('*' + this.props.filename + '*')
		let input = (
			<span>
				<input type="text" defaultValue={this.props.filename} />
				<i className={styles.OKIcon} />
				<i className={styles.NoIcon} />
			</span>
		);

		return (	
			<span>

    		{this.state.editing? input : ' ' + this.props.filename + ' '}
    		<i className={styles.pencilIcon} onClick={this.toggleEditing} />

  		</span>
		);
	}

}


export default EditableName;