import React, { useState } from "react";
import * as math from "mathjs";
import "./App.css";

import Display from "./Components/Display";
import Numbers from "./Components/Numbers";

function App() {
	// Allots state for the number and it's setter and the positivity of a number
	let [number, updateNumber] = useState(" ");
	let [positive, setPositive] = useState(true);

	// Method that gets the number inputed: when it is zero, the number is assigned to the value passed in from the corresponding button from Numbers.js
	const getNumber = (value) => {
		if (number === 0) {
			updateNumber((number = value));
		} else {
			updateNumber(number + value);
		}
	};
	//Method that gets the operator flag from it's correspondonding button in Numbers.js, also contains logic for flipping the positivity of a value and if the operator is an = sign, calls the handleResult method
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

	//Method that handles the result by parsing the number value throught he mathJS library
	const handleResult = () => {
		updateNumber(math.evaluate(number).toFixed(3));
	};
	// Method that clears the numbers in the display field by updating the number to be an empty string. If you update to 0 then it comes with a bug that is exclusive to the updateNumber logic where it adds a number multiple times to itself if you spam one button
	const clearNumbers = () => {
		updateNumber(" ");
	};

	//Method that will flip positivity on call
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
