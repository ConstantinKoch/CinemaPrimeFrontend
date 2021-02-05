import React, { useState } from 'react';
import MapContainer from './MapContainer';
import './ContactForm.css';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const ContactForm = () => {
	const [ status, setStatus ] = useState('Senden');
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setStatus('Gesendet');
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

		<div className="contact_content-text">
        <div className="contact_text">
		<Grid
			container
			className="contactform_map"
			justify="center"
			spacing={4}
			alignItems="flex-start"
			direction="row"
		>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<h5 style={{fontWeight:'bold'}}>Kontaktieren Sie uns:</h5>
				<div className="container" style={{backgroundColor: 'transparent'}}>
					<form onSubmit={handleSubmit} >
						<div className="nameField">
							<div id="nameText">Name:</div>
							<input type="text" id="name" required />
						</div>
						<div className="emailField">
							<div id="emailText">Email:</div>
							<input type="email" id="email" required />
						</div>
						<div className="messageField">
							<div id="messageText">Nachricht:</div>
							<textarea id="message" required />
						</div>
						<Button className="input" type="submit" id="submitButton" variant="contained">
							{status}
						</Button>
					</form>
				</div>
			</Grid>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<div  className="map_div">
				<h5 style={{fontWeight:'bold'}}>So kommen Sie zu uns:</h5>
					<div>
						<MapContainer  className="map" />
					</div>
				</div>
			</Grid>
		</Grid>
		</div>
		</div>
	);
};

export default ContactForm;
