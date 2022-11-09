import React, {Component} from 'react';
import ScrollBox from './ScrollBox';
import ValidationSample from "./ValidationSample";

class App extends Component {
	render() {
		return (
			<div>
				<ScrollBox ref={ref => (this.scrollBox = ref)}/>
				<button onClick={() => this.scrollBox.scrollToBottom()}>
					맨 밑으로
				</button>
			</div>
		);

		// return (
		// 	<ValidationSample />
		// );
	}
}

export default App;
