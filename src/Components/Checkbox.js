import React from 'react';
import styles from './folderTree.css'

class Checkbox extends React.Component {
	static propTypes = {
  	handleCheck: React.PropTypes.func.isRequired,	
  	status: React.PropTypes.number.isRequired
	};

	constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
  }

	componentDidUpdate(prevProps, prevState) {
		// console.log('Checking indeterminate status', this.props.status);
		if (this.props.status === 0.5) 
			this.checkBox.indeterminate = true;
		else
			this.checkBox.indeterminate = false;
	}

	componentDidMount() {
		// console.log('Checking indeterminate status', this.props.status);
		if (this.props.status === 0.5) 
			this.checkBox.indeterminate = true;
		else
			this.checkBox.indeterminate = false;
	}

	handleCheck(e) {
		this.props.handleCheck(e);
	}

	render() {
		return <input type="checkbox" onChange={this.handleCheck} checked={this.props.status !== 1? false : true} ref={box => this.checkBox = box} className={styles.checkBox}/>
	}
}

export default Checkbox;