import React, { Component } from 'react';
import styles from './folderTreeCSS.css';

class FilePane extends Component {
	static propTypes = {
	  // filename: React.PropTypes.string.isRequired,
	  addNewFile: React.PropTypes.func.isRequired,
	};

	constructor(props) {
    super(props);
    // this.toggleEditing = this.toggleEditing.bind(this);
    this.handleNewFile = this.handleNewFile.bind(this);

    this.state = {
    	editingNewFile: false,
    };
  }

	// toggleEditing() {
 //  	this.setState(prevState => ({editingNewFile: !prevState.editing}));
 //  	if (this.state.editing)
 //  		this.textInput.focus();
 //  }

  handleNewFile() {
  	this.props.addNewFile(this.textInput.value);
  }

	render() {
		return (
			<div className={styles.filePane}>
				<span>
					<input type="text" defaultValue={""} ref={ input => { this.textInput = input; } } />
					<i className={styles.OKIcon} onClick={this.handleNewFile} />
					<i className={styles.NoIcon} onClick={this.toggleEditing} />
				</span>
			</div>
		);
	}

}

export default FilePane;