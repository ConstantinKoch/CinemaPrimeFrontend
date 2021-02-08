import './App.css';
import Navbar from './Body/Navbar/Navbar';
import Footer from './Body/Footer/Footer';
import ContactForm from './Body/Contact/ContactForm';
import DetailMoviePage from './Body/DetailMoviePage/DetailMoviePage';
import LandingPage from './Body/LandingPage/LandingPage';
import MovieView from './Body/MovieView/MovieView';
import Cart from './Body/Cart/Cart';
import SeatPage from './Body/SeatPage/SeatPage';
import InformationPage from './Body/InformationPage/InformationPage';
import FAQ from './Body/FAQ/FAQ';
import Checkout from './Body/Checkout/Checkout';
import ScrollToTop from './Body/ScrollToTop';
//change to LoginRegister
import LoginRegister from './Body/LoginRegister/Register';
import AGB from './Body/AGB/AGB';
import Impressum from './Body/Impressum/Impressum';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router basename='/cinemaprimefrontend'>
			<div className="page-container">
				{/*//to secure the new page starts at top*/}
				<ScrollToTop />
				<Navbar />
				<Switch >
					<div className="content-wrap">
					<Route path="/movieDetails" component={DetailMoviePage} />
					<Route path="/kontakt" component={ContactForm} />
					<Route path="/programm" exact component={MovieView} />
					<Route path="/cart" exact component={Cart} />
					<Route path="/checkout" exact component={Checkout} />
					<Route path="/register" exact component={LoginRegister} />
					<Route path="/agb" exact component={AGB} />
					<Route path="/impressum" exact component={Impressum} />
					<Route path="/booking" component={SeatPage} />
					<Route path="/info" exact component={InformationPage} />
					<Route path="/faq" exact component={FAQ} />
					<Route path="CinemaPrimeFrontend/" component={LandingPage} />
					</div>
				</Switch>
				<Footer/>
				</div>
			</Router>
		</div>
	);
}

export default App;
