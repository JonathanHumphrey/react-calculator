import React, { useState } from "react";
import * as math from "mathjs";
import "./App.css";

import Display from "./Components/Display";
import Numbers from "./Components/Numbers";

function App() {
	let [number, updateNumber] = useState(" ");
	let [positive, setPositive] = useState(true);

	const getNumber = (value) => {
		if (number === 0) {
			updateNumber((number = value));
		} else {
			updateNumber(number + value);
		}
	};

	const getOperatorFlag = (e) => {
		if (e.target.value === "=") {
			handleResult();
		} else if (e.target.value === "true") {
			handlePos();
			if (!positive) {
				updateNumber(-+number);
			}
		} else {
			updateNumber(number + e.target.value);
		}
	};

	const handleResult = () => {
		updateNumber(math.evaluate(number).toFixed(3));
	};

	const clearNumbers = () => {
		updateNumber(" ");
	};
	const handlePos = () => {
		if (positive) {
			setPositive(!positive);
		}
	};

	return (
		<div className="App">
			<h1>Calculate!</h1>
			<div className="calc-header">
				<Display number={number} />
			</div>
			<div className="calc-body">
				<Numbers
					getNumber={getNumber}
					handleResult={handleResult}
					getOperatorFlag={getOperatorFlag}
					clearNumbers={clearNumbers}
				/>
			</div>
		</div>
	);
}

export default App;
