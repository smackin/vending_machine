import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Reeses from './Reeses';
import Chips from './Chips';
import Soda from './Soda';

function VendingMachine() {
	return (
		<div
			className="VendingMachine"
			style={{
				backgroundImage:
					'url("https://images.unsplash.com/photo-1625650484478-113df4bfc370?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVuZGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")'
			}}
		>

			<h1>
				<Link to="/reeses">PB CUPS</Link>
			</h1>
			<h1>
				<Link to="/chips">Ruffles Chips</Link>
			</h1>
			<h1>
				<Link to="/soda">Ice Cold Soda</Link>
			</h1>
			<h1>
				<Link to="/popcorn">Freshly Popped Popcorn</Link>
			</h1>
		</div>
	);
}

export default VendingMachine;
