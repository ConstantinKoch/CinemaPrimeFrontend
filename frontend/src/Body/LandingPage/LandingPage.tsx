import React from 'react';
import './LandingPage.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function HeroSection() {
	return (
		<div className="hero-container">
			<h1> CINEMA PRIME</h1>
			{/*<div className="landing-btns">
				<Link className="landing-link-program" to="/program">
					<Button className="landing-btn-program" variant="contained">
						Program
					</Button>
				</Link>
				&nbsp; &nbsp;
				<Link className="landing-link-contact" to="/contact">
					<Button className="landing-btn-contact" variant="contained">
						Contact
					</Button>
				</Link>
	</div>*/}
		</div>
	);
}

export default HeroSection;
