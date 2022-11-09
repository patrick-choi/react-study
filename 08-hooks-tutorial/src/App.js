import React, { useState } from 'react';
import Average from './Average';
import CounterState from "./CounterState";
import Info from "./Info";
import Counter from "./Counter";

const App = () => {
	// return <Counter />;

	// const [visible, setVisible] = useState(false);
	//
	// return (
	// 	<div>
	// 		<button onClick={() => { setVisible(!visible)}}>{visible ? 'Hide' : 'Show'}</button>
	// 		<hr />
	// 		{visible && <Info/>}
	// 	</div>
	// );

	return <Average />;
};

export default App;
