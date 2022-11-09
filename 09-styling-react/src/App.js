import React, { Component } from "react";
import SassComponent from "./SassComponent";
import logo from './logo.svg';
import 'App.css';

class App extends Component {
	// render() {
	//   return (
	//     <div>
	//       <SassComponent />
	//     </div>
	//   );
	// }

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferre">Lean React</a>
				</header>
			</div>
		);
	}
}

export default App;
