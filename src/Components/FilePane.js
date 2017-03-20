import React, { Component } from 'react';
import styles from './folderTreeCSS.css';

class FilePane extends Component {
	static propTypes = {
	  addNewFile: React.PropTypes.func.isRequired,
	  addingNewFile: React.PropTypes.bool.isRequired,
	  toggleAddingNewFile: React.PropTypes.func.isRequired,	
	};

	constructor(props) {
    super(props);
    this.handleNewFile = this.handleNewFile.bind(this);

    this.state = {
    	addingNewFile: this.props.addingNewFile,
    };
  }

  componentWillReceiveProps(nextProps) {
  	if (nextProps.addingNewFile !== this.props.addingNewFile) {
  		this.setState({addingNewFile: nextProps.addingNewFile});
  	}
  }

  handleNewFile() {
  	this.props.addNewFile(this.textInput.value);
  	this.textInput.value = "";
  }

	render() {
		return (
			<div className={styles.filePane}>
			{ this.state.addingNewFile &&
				<span>
					<input type="text" defaultValue={""} ref={ input => { this.textInput = input; } } />
					<i className={styles.OKIcon} onClick={this.handleNewFile} />
					<i className={styles.NoIcon} onClick={this.props.toggleAddingNewFile} />
				</span>
			}
			</div>
		);
	}

}

export default FilePane;