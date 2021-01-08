import React from 'react';
import './App.css';
//import Header from './Header/Header';
import Body from './Body/Body';
import Navbar from './Body/Navbar/Navbar';
import Footer from './Body/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Body} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
