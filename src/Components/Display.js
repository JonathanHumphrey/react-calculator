import React from "react";

export default function Display(props) {
	return (
		<div>
			<div className="display-window">
				<input
					className="input"
					type="text"
					id="result"
					value={props.number}
					readOnly
				/>
			</div>
		</div>
	);
}
