import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import Movie from '../../Models/Movie';
import './SeatPage.css';
import Cinema from '../../Models/Cinema';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

interface IProps {}

interface IState {
	url: String;
}

export default class SeatPage extends Component<IProps, IState> {
	render() {
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
					<p>Sitzauswahl:</p>
					<div className="container">
						<form>
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
							<Button className="input" type="submit" id="submitButton" variant="contained" />
						</form>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<div className="map_div">
						<p />
					</div>
				</Grid>
			</Grid>
		);
	}
}
