import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
import './index.css';
import App from './App';
// import store from './reducer'


// ReactDOM.render(
// 	// wrap this in provider, put store in the react context
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('root')
// )
ReactDOM.render(
	<App />,
	document.getElementById('root')
)
