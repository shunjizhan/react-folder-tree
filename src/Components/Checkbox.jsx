import React from 'react';
import styles from './folderTreeCSS.css'

class Checkbox extends React.Component {
	static propTypes = {
  	handleCheck: React.PropTypes.func.isRequired,	
  	status: React.PropTypes.number.isRequired
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.props.status === 0.5) 
			this.checkBox.indeterminate = true;
		else
			this.checkBox.indeterminate = false;
	}

	componentDidMount() {
		if (this.props.status === 0.5) 
			this.checkBox.indeterminate = true;
		else
			this.checkBox.indeterminate = false;
	}

	render() {
		return (
			<input 
				type="checkbox" 
				onChange={this.props.handleCheck} 
				checked={this.props.status !== 1? false : true} 
				ref={box => this.checkBox = box} 
				className={styles.checkBox}
			/>
		)
	}
}

export default Checkbox;