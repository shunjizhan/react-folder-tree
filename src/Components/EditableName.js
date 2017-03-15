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
  	if (this.state.editing) {						// TODO: this doesn't work 
  		this.textInput.focus();
  	}
  }

  handleChangeName() {
  	this.props.setMyName(this.textInput.value);
  	this.toggleEditing();
  }

	render() { 
		const input = (
			<span>
				<input type="text" defaultValue={this.props.filename} ref={ input => { this.textInput = input; } } />
				<i className={styles.OKIcon} onClick={this.handleChangeName} />
				<i className={styles.NoIcon} onClick={this.toggleEditing} />
			</span>
		);

		const name = (
			<span>
				{' ' + this.props.filename + ' '}
				<i className={styles.pencilIcon} onClick={this.toggleEditing} />
			</span>
		);

		return (	
			<span>
    		{ this.state.editing? input : name }
  		</span>
		);
	}

}


export default EditableName;