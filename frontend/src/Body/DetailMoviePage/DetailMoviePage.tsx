import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import Movie from '../../Models/Movie';
import './DetailMoviePage.css'
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import { Link } from 'react-router-dom';

interface IProps {
}

interface IState {
	runningMovies?: Movie[];
	url?: String;
	lastSegment?: number;
	movie?: Movie;
	book_path?: String;
	selected_date?: String;
}

const options = [
	{ value: '11_01_21', label: '11.01.21 12:00' },
	{ value: '12_01_21', label: '12_01_21' },
	{ value: '13_01_21', label: '13_01_21' },
	{ value: '14_01_21', label: '14_01_21' } 
  ];

export default class DetailMoviePage extends Component<IProps, IState> {
	state:IState = ({url : window.location.href})
	componentDidMount() {
		axios.get<Movie[]>('http://localhost:8080/tmdb/running/').then((res) => res.data)
		.then((result) => {
			this.setState({
				runningMovies: result
			});
		}).then((): void => {
		this.setState({lastSegment : Number(this.state.url?.split('/').pop())})
		this.setState({movie : this.state.runningMovies?.filter(movie => movie.id === this.state.lastSegment).pop()})} )
	}

	handleChange(e: any) {
		console.log("Fruit Selected!!");
		this.setState({ selected_date : e.target.value });
	}
	
	render(): JSX.Element {
		return (
			<Grid
			container
			className="contactform_map"
			justify="center"
			spacing={6}
			alignItems="flex-start"
			direction="row"
		>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<div className="movieDetails_img_div">
				<img    className="movieDetails_img"
						src={'https://image.tmdb.org/t/p/w500' + this.state.movie?.poster_path}
						alt={this.state.movie?.title + ' Movie Poster'}/>
				</div>
			</Grid>

			<Grid item xs={12} sm={12} md={6} lg={6}>

				<div className="movieDetails_info_div">
                    <div className="movieDetails_title">{this.state.movie?.title}</div>
                    <div className="movieDetails_overview">{this.state.movie?.overview}</div>					
					</div>
					<Select
						className="movieDetails_select"
						classNamePrefix="select"
						isDisabled={false}
						isLoading={false}
						isClearable={false}
						isRtl={false}
						defaultValue={{ label: "Select Dept", value: "test" }}	
						isSearchable={false}
						name="color"
						options={options}
						onChange={this.handleChange}
        			/>
					<div className="movieDetails_btns_div">
						<Button className="movieDetails_btn" variant="contained">
							Trailer
						</Button>
						<Link className="movieLink_booking" to={{pathname: (this.state.movie?.id!==undefined ? 
							`/booking/${this.state.movie?.id}/${this.state.selected_date}` : '/')}}>
						<Button className="movieDetails_btn" variant="contained">
							Book
						</Button>
						</Link>
					</div>
            </Grid>
		</Grid>
		);
	}
}