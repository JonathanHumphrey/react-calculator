import React from "react";

export default function Numbers({
	getNumber,
	getOperatorFlag,
	handleResult,
	clearNumbers,
}) {
	return (
		<div className="button-container">
			<div className="keypad">
				<div className="row">
					<button className="operatorButtonTop" onClick={clearNumbers}>
						C
					</button>
					<button
						className="operatorButtonTop"
						onClick={getOperatorFlag}
						value="%"
					>
						%
					</button>
					<button
						className="operatorButtonTop"
						onClick={getOperatorFlag}
						value="true"
					>
						+/-
					</button>
				</div>
				<div className="row">
					<button className="button" onClick={() => getNumber(7)}>
						7
					</button>
					<button className="button" onClick={() => getNumber(8)}>
						8
					</button>
					<button className="button" onClick={() => getNumber(9)}>
						9
					</button>
				</div>

				<div className="row">
					<button className="button" onClick={() => getNumber(4)}>
						4
					</button>
					<button className="button" onClick={() => getNumber(5)}>
						5
					</button>
					<button className="button" onClick={() => getNumber(6)}>
						6
					</button>
				</div>

				<div className="row">
					<button className="button" onClick={() => getNumber(1)}>
						1
					</button>
					<button className="button" onClick={() => getNumber(2)}>
						2
					</button>
					<button className="button" onClick={() => getNumber(3)}>
						3
					</button>
				</div>

				<div className="rowBottom">
					<button className="button button0" onClick={() => getNumber(0)}>
						0
					</button>
					<button
						className="button buttonDot"
						onClick={getOperatorFlag}
						value="."
					>
						.
					</button>
				</div>
			</div>
			<div className="operators">
				<button
					className="operatorButtonSide"
					onClick={getOperatorFlag}
					value="-"
				>
					-
				</button>
				<button
					className="operatorButtonSide"
					onClick={getOperatorFlag}
					value="+"
				>
					+
				</button>
				<button
					className="operatorButtonSide"
					onClick={getOperatorFlag}
					value="/"
				>
					÷
				</button>
				<button
					className="operatorButtonSide"
					onClick={getOperatorFlag}
					value="*"
				>
					x
				</button>
				<button className="operatorButtonSide" onClick={handleResult} value="=">
					=
				</button>
			</div>
		</div>
	);
}
