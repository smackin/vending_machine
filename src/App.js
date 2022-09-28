import React from 'react';
import VendingMachine from './VendingMachine';
import Chips from "./Chips"
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Soda from './Soda';
import Popcorn from './Popcorn'
import Reeses from './Reeses';

function App() {
  return (
    <div className="App">
      <h1>Vending Machine</h1> 
        <BrowserRouter>
          <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/chips'>
          <Chips />
        </Route>
        <Route exact path='/soda'>
          <Soda />
        </Route>
        <Route exact path='/reeses'>
          <Reeses />
        </Route>
        <Route exact path='/popcorn'>
          <Popcorn />
        </Route>
        </BrowserRouter >
    </div>
  );
}

export default App;
