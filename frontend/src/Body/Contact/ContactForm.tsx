import React, { useState } from 'react';
import MapContainer from './MapContainer';
import './ContactForm.css';
import { Grid } from '@material-ui/core';

const ContactForm = () => {
	const [ status, setStatus ] = useState('Submit');
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setStatus('Sending...');
		const { name, email, message } = e.target.elements;
		let details = {
			name: name.value,
			email: email.value,
			message: message.value
		};
		let response = await fetch('http://localhost:5000/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(details)
		});
		setStatus('Submit');
		let result = await response.json();
		alert(result.status);
	};
	return (
		<Grid container className="contactform_map" justify="space-evenly" alignItems="flex-start" direction="row">
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<p>Kontakt:</p>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">Name:</label>
						<input type="text" id="name" required />
					</div>
					<div>
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" required />
					</div>
					<div>
						<label htmlFor="message">Message:</label>
						<textarea id="message" required />
					</div>
					<button type="submit">{status}</button>
				</form>
			</Grid>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<div className="map_div">
					<p>Adresse:</p>
					<MapContainer className="map" />
				</div>
			</Grid>
		</Grid>
	);
};

export default ContactForm;
