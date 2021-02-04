import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import Movie from '../../Models/Movie';
import Seatmap from 'react-seatmap';
import SeatPicker from 'react-seat-picker'
import './SeatPage.css';
import Cinema from '../../Models/Cinema';
import { Grid, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

interface IProps {}

interface IState {
	url?: String;
	movie?: Movie;
	loading: boolean;
}



export default class SeatPage extends Component<IProps, IState> {
	state: IState = {loading: false};

	FormRow() {
		return (
			<React.Fragment>
				<Grid item xs={2} id="seat1">
					<Paper className="Paper">Seat</Paper>
				</Grid>
				<Grid item xs={2} id="seat2">
					<Paper className="Paper">Seat</Paper>
				</Grid>
				<Grid item xs={2} id="seat3">
					<Paper className="Paper">Seat</Paper>
				</Grid>
				<Grid item xs={2} id="seat4">
					<Paper className="Paper">Seat</Paper>
				</Grid>
				<Grid item xs={2} id="seat5">
					<Paper className="Paper">Seat</Paper>
				</Grid>
				<Grid item xs={2} id="seat6">
					<Paper className="Paper">Seat</Paper>
				</Grid>
			</React.Fragment>
		);
	}



	matrix = new Array(10).fill(0).map(() => new Array(10).fill(0));

	handleSeatClick() {
		alert("Your file is being uploaded!")

	}

	render() {

		const rows = [
			[{ number: 1 }, {number: 2}, {number: '3', isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6}],
			[{ number: 1, isReserved: true }, {number: 2, isReserved: true}, {number: '3', isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6}],
			[{ number: 1 }, {number: 2}, {number: 3, isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6}],
			[{ number: 1 }, {number: 2}, {number: 3}, null, {number: '4'}, {number: 5}, {number: 6}],
			[{ number: 1, isReserved: true }, {number: 2}, {number: '3', isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6, isReserved: true}]
		];
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
					<div className="seat_container">

						{//<Seatmap rows={rows} maxReservableSeats={3} alpha />
						}

						<table className="table">
							<tbody>
							{this.matrix.slice(1, this.matrix.length).map((row, seats) => {
								return(
									<tr>
										<td onClick={this.handleSeatClick}>{row[0]}</td>
										<td className="row">{row[1]}</td>
										<td>{row[2]}</td>
										<td>{row[3]}</td>
										<td>{row[4]}</td>
										<td>{row[5]}</td>
										<td>{row[6]}</td>
										<td>{row[7]}</td>
										<td>{row[8]}</td>
										<td>{row[9]}</td>
										<td>{row[10]}</td>
									</tr>
								);
							})}
							</tbody>
						</table>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<div className="info_div">
						<p> Infos: </p>


					</div>
				</Grid>
			</Grid>
		);
	}
}
