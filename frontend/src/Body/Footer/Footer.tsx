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
					Abonnieren Sie unseren Newsletter, um keine Neuigkeiten zu verpassen!
				</p>
				{/*<p className="footer-subscription-text">You can unsubscribe at any time.</p>*/}
				<div className="input-area">
					<input
						type="email"
						name="email"
						placeholder="E-Mail-Adresse"
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
						<Button variant="contained">Abonnieren</Button>
					</div>
				</div>
			</section>
			<section className="footer-links">
			<div className="link-wrap">
				<div className="footer-link-items">
					<Link to="/impressum">
						<h4>Impressum</h4>
					</Link>
				</div>
				<div className="footer-link-items">
					<Link to="/agb">
						<h4>AGB</h4>
					</Link>
				</div>
				<div className="footer-link-items">
					<Link to="/faq">
						<h4>FAQ</h4>
					</Link>
				</div>
			</div>
			</section>
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
