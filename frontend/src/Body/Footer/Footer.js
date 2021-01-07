import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Footer.css';

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					Join our CinemaPrime newsletter to receive exclusive deals
				</p>
				<p className="footer-subscription-text">You can unsubscribe at any time.</p>
				<div className="input-areas">
					<form>
						<input type="email" name="email" placeholder="Your Email" className="footer-input" />
						<Button buttonStyle="btn--outline" text="Subscribe!" />
					</form>
				</div>
			</section>
			<div class="footer-links">
				<div className="footer-link-wrapper">
					<div class="footer-link-items">
						<h2>About Us</h2>
						<Link to="/">Terms of Service</Link>
						<Link to="/">Careers</Link>
					</div>
					<div class="footer-link-items">
						<h2>Contact Us</h2>
						<Link to="/">Contact</Link>
						<Link to="/">Support</Link>
					</div>
				</div>
			</div>
			<section class="social-media">
				<div class="social-media-wrap">
					<div class="footer-logo">
						<Link to="/" className="social-logo">
							CinemaPrime
							<i class="fab fa-typo3" />
						</Link>
					</div>
					<small class="website-rights">CinemaPrime © 2020</small>
					<div class="social-icons">
						<Link class="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
							<i class="fab fa-facebook-f" />
						</Link>
						<Link class="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
							<i class="fab fa-instagram" />
						</Link>
						<Link class="social-icon-link youtube" to="/" target="_blank" aria-label="Youtube">
							<i class="fab fa-youtube" />
						</Link>
						<Link class="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
							<i class="fab fa-twitter" />
						</Link>
						<Link class="social-icon-link twitter" to="/" target="_blank" aria-label="LinkedIn">
							<i class="fab fa-linkedin" />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
