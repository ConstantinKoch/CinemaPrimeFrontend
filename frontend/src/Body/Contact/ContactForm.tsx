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
		<Grid
			container
			className="contactform_map"
			justify="center"
			spacing={0}
			alignItems="flex-start"
			direction="row"
		>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<p>Kontakt:</p>
				<div className="container">
					<form onSubmit={handleSubmit}>
						<div className="nameField">
							<div id="nameText">Name:</div>
							<input type="text" id="name" required />
						</div>
						<div className="emailField">
							<div id="emailText">Email:</div>
							<input type="email" id="email" required />
						</div>
						<div className="messageField">
							<div id="messageText">Message:</div>
							<textarea id="message" required />
						</div>
						<button className="input" type="submit" id="submitButton">
							{status}
						</button>
					</form>
				</div>
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
