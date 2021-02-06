import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import Movie from '../../Models/Movie';
import './SeatPage.css';
import { Grid, Paper } from '@material-ui/core';
//import ApiService from '../../Services/ApiService';


interface IProps {}

interface IState {
	runningMovies?: Movie[];
	lastSegment?: number;
	url: String;
	movie?: Movie;
	loading: boolean;
	selected_date: string;
}

export default class SeatPage extends Component<IProps, IState> {
	state: IState = {url: window.location.href, loading: false, selected_date: ""};

	componentDidMount() {
		axios.get<Movie[]>('http://localhost:8080/tmdb/running/').then((res) => res.data)
		.then((result) => {
			this.setState({
				runningMovies: result
			});
		}).then((): void => {
			this.setState({lastSegment : Number(this.state.url.split('/')[4]), selected_date: this.state.url.split('/')[5].replace("_"," ")})
			console.log(this.state.lastSegment + this.state.selected_date)
			this.setState({movie : this.state.runningMovies?.filter(movie => movie.id === this.state.lastSegment).pop()})
		})
	}

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

	render() {

		{/*const rows = [
			[{ number: 1 }, {number: 2}, {number: '3', isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6}],
			[{ number: 1, isReserved: true }, {number: 2, isReserved: true}, {number: '3', isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6}],
			[{ number: 1 }, {number: 2}, {number: 3, isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6}],
			[{ number: 1 }, {number: 2}, {number: 3}, null, {number: '4'}, {number: 5}, {number: 6}],
			[{ number: 1, isReserved: true }, {number: 2}, {number: '3', isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6, isReserved: true}]
		];*/}

		return (

		<Grid
				container
				className="seatpage_grid"
				justify="flex-start"
				spacing={0}
				alignItems="flex-start"
				direction="row"
			>
				
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<div className="info_div">
                    <div className="movieDetails_title">{this.state.movie?.title}</div>
					<p>{this.state.selected_date}</p>

						<div className="booking_img_div">

				<img    className="booking_img"
						src={'https://image.tmdb.org/t/p/w500' + this.state.movie?.poster_path}
						alt={this.state.movie?.title + ' Movie Poster'}/>
				</div>


					</div>
				</Grid>
				
				<Grid className="seat_container_grid" item xs={12} sm={12} md={6} lg={6}>
					<h3>Sitzauswahl:</h3>
					<div className="seat_container">
						<table className="table">
							<tbody>
							{this.matrix.slice(1, this.matrix.length).map((row, seats) => {
								return(
									<tr>
										<td>{row[0]}</td>
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
					
			</Grid>
		);
	}
}
