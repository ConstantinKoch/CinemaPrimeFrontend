import React from 'react';
import './LandingPage.css';
import Button from '@material-ui/core/Button';

function HeroSection() {
	return (
		<div className="hero-container">
			<h1> CINEMA PRIME</h1>
			<p> What are you waiting for?</p>
			<div className="landing-btns">
				<Button className="landing-btn-program" variant="contained">
					Program
				</Button>
				&nbsp; &nbsp;
				<Button className="landing-btn-program" variant="contained">
					Contact
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
