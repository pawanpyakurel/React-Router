import React from 'react';
import './App.css';
import Menu from './menu';
import About from './About';
import Contact from './Contact';
import {BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
  	<BrowserRouter>
    <div>
      <Menu />
      	<Switch>
      		<Route path= "/" exact component= {Home}/>
      		<Route path= "/about" component= {About}/>
      		<Route path= "/contact" component= {Contact}/>
      	</Switch>
    </div>
    </BrowserRouter>
  );
}

const Home = () =>{
	return(
		<div className="contactstyle">
			<h2> Welcome to Home Pages</h2>
		</div>

	)
}

export default App;
 