import React, { Component } from 'react';
import styles from './folderTreeCSS.css';

class FolderToolbar extends Component {
	render() {
		return (
			<div className={styles.folderToolbar}>
				<div className={styles.addButton}><i className={styles.addIcon} /> Add</div>
				<div className={styles.deleteButton}><i className={styles.deleteIcon} /> Delete</div>
			</div>
		);
	}

}

export default FolderToolbar;