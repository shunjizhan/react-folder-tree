import React, { Component } from 'react';
import styles from './folderTreeCSS.css';

class FolderToolbar extends Component {
	static propTypes = {
		addObj: React.PropTypes.func.isRequired,	
		deleteObj: React.PropTypes.func.isRequired,	
	};

	render() {
		return (
			<div className={styles.folderToolbar}>
				<div className={styles.addButton}><i className={styles.addIcon} /> Add</div>
				<div className={styles.deleteButton} onClick={ () => { this.props.deleteObj(); } }><i className={styles.deleteIcon} /> Delete</div>
			</div>
		);
	}

}

export default FolderToolbar;