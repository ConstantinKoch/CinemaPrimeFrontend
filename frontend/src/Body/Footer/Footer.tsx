//import { TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
//import Button, { STYLES, SIZES } from '../Button/Button';
import Button from '@material-ui/core/Button';
import './Footer.css';

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					Join our CinemaPrime newsletter to receive exclusive deals!
				</p>
				{/*<p className="footer-subscription-text">You can unsubscribe at any time.</p>*/}
				<div className="input-area">
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						className="footer-input"
						//placeholderTextColor="white"
					/>
					{/*<TextField
						className="footer-input"
						color="primary"
						label="Your Email"
						id="standard-basic"
						type="email"
						name="email"
						InputLabelProps={{
							style: {
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								color: 'white'
							}
						}}
						//placeholderTextColor="white"
					/>*/}
					&nbsp; &nbsp;
					<div className="footer-button">
						<Button variant="contained">Subscribe</Button>
					</div>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-items">
					<Link to="/aboutus">
						<h2>About Us</h2>
					</Link>
				</div>
				<div className="footer-link-items">
					<Link to="/contact">
						<h2>Contact</h2>
					</Link>
				</div>
			</div>
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="footer-logo">
						<Link to="/" className="social-logo">
							CinemaPrime &nbsp; <i className="fas fa-film" />
						</Link>
					</div>
					<small className="website-rights">CinemaPrime © 2021</small>
				</div>
			</section>
		</div>
	);
}

export default Footer;
