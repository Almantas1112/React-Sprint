import React from "react";
import { useState } from 'react';
import Counter from "./Counter";
import Button from 'react-bootstrap/Button';
import { Stack } from "react-bootstrap";

function CounterApp() {
	const [calc, setCalc] = useState("");
	const [firstValue, setFirstValue] = useState("");
	const [secondValue, setSecondValue] = useState("");
	return (
		<div className="text-center mt-4 mb-4">
            <h1 className="text-primary">Counter app</h1>
			<div className="CountMe text-danger">
			<Counter />
			</div>
            <br />
			<div className="calculator">
            <h1 className="text-primary">Simple Calculator</h1>
				<div className="display text-danger">
					<h1>{ calc }</h1>
				</div>
				<div className="operators text-center mt-4 mb-4">
					<input type="text" placeholder="First Value" onChange={e => setFirstValue(e.target.value)}>
					</input>
					<input type="text" placeholder="Second Value" onChange={e => setSecondValue(e.target.value)}>
					</input>
                    <Stack gap={2} className="col-md-5 mx-auto mt-2">
					<Button variant="success" onClick={() => setCalc(+firstValue + +secondValue)}>+</Button>
					<Button variant="success" onClick={() => setCalc(firstValue - secondValue)}>-</Button>
					<Button variant="success" onClick={() => setCalc(firstValue * secondValue)}>*</Button>
					<Button variant="success" onClick={() => setCalc(firstValue / secondValue)}>/</Button>
                    </Stack>
				</div>
			</div>
			
		</div>
	);
}
export default CounterApp;