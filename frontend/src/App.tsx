import React from 'react';
import './App.css';
//import Header from './Header/Header';
import Navbar from './Body/Navbar/Navbar';
import Footer from './Body/Footer/Footer';
import ContactForm from './Body/Contact/ContactForm';
import DetailMoviePage from './Body/DetailMoviePage/DetailMoviePage';
import LandingPage from './Body/LandingPage/LandingPage';
import MovieView from './Body/MovieView/MovieView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/movieDetails" component={DetailMoviePage} />
					<Route path="/contact" component={ContactForm} />
					<Route path="/" exact component={LandingPage} />
					<Route path="/program" exact component={MovieView} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
