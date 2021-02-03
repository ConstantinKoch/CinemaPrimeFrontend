import './App.css';
import Navbar from './Body/Navbar/Navbar';
import Footer from './Body/Footer/Footer';
import ContactForm from './Body/Contact/ContactForm';
import DetailMoviePage from './Body/DetailMoviePage/DetailMoviePage';
import LandingPage from './Body/LandingPage/LandingPage';
import MovieView from './Body/MovieView/MovieView';
import Cart from './Body/Cart/Cart';
import SeatPage from './Body/SeatPage/SeatPage';
import Checkout from './Body/Checkout/Checkout';
import ScrollToTop from './Body/ScrollToTop';
//change to LoginRegister
import LoginRegister from './Body/LoginRegister/Register';
import AboutUs from './Body/AboutUs/AboutUs';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				{/*//to secure the new page starts at top*/}
				<ScrollToTop />
				<Navbar />
				<Switch>
					<Route path="/movieDetails" component={DetailMoviePage} />
					<Route path="/contact" component={ContactForm} />
					<Route path="/program" exact component={MovieView} />
					<Route path="/cart" exact component={Cart} />
					<Route path="/checkout" exact component={Checkout} />
					<Route path="/register" exact component={LoginRegister} />
					<Route path="/aboutus" exact component={AboutUs} />
					<Route path="/booking" exact component={SeatPage} />
					<Route path="/" exact component={LandingPage} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
