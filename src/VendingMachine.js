import React from 'react';
import "./App.css"
import { BrowserRouter, Route } from 'react-router-dom';
import Reeses from './Reeses';
import Chips from './Chips';
import Soda from './Soda';

function VendingMachine() {
	return (
		<div>
			<h2> I AM THE MIGHTY VENDING MACHINE</h2>
            <p> Make your selection wisely..</p>
            <img src="https://images.unsplash.com/photo-1625650484478-113df4bfc370?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVuZGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
		</div>
	);
}

export default VendingMachine;
